import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckBox from '../Movies/FilterCheckBox/FilterCheckBox';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import api from '../../utils/MainApi';

function SavedMovies(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [movies, setMovies] = React.useState([]);
  const [shortMovie, setShortMovie] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [error, setError] = React.useState('');
  const [preloaderVisibility, setPreloaderVisibility] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  const seacrhStorage = localStorage.getItem('savedSearch');
  const pastMovies = JSON.parse(localStorage.getItem('savedMovies'));
  const searchFilterStorage = JSON.parse(localStorage.getItem('SavedSearchFilter'));
  const SavedShortMoviesStorage = JSON.parse(localStorage.getItem('savedShortMovies'));

  function changeShortMovie() {
    setShortMovie(!shortMovie);
    if (!shortMovie) {
      if (SavedShortMoviesStorage === null) {
        setError("Проведите поиск");
      }
      else {
        setError("");
        setMovies(SavedShortMoviesStorage);
      }
    }
    else {
      if (pastMovies === null) {
        setError("Проведите поиск");
      }
      else {
        setError("");
        setMovies(pastMovies);
      }
    }
  }

  React.useEffect(() => {
    if (seacrhStorage) {
      setSearchValue(seacrhStorage);
    }
    if (searchFilterStorage) {
      const status = searchFilterStorage;
      setShortMovie(status);
    }
    if (pastMovies) {
      const pastMovie = pastMovies;
      setMovies(pastMovie);
    }
    if (searchFilterStorage && SavedShortMoviesStorage) {
      const pastShortMovies = SavedShortMoviesStorage;
      setMovies(pastShortMovies);
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('SavedSearchFilter', shortMovie);
  }, [shortMovie]);


  React.useEffect(() => {
    api.getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
    if (seacrhStorage !== 'null') {
      setSearchValue(seacrhStorage);
    }
    if (localStorage.getItem('savedMovies')) {
      setMovies(pastMovies);
    }
  }, []);

  async function Seacrh(data) {
    setPreloaderVisibility(true);
    try {
      const searchResponse = await savedMovies.filter(card => {
        const name = data.value;
        localStorage.setItem('savedSearch', name);
        if (card.nameRU.toLowerCase().includes(name)) {
          return true
        }
        return false
      });
      if (searchResponse.length === 0) {
        setEmpty(true)
      }
      else {
        setEmpty(false);
      }
      const shortMovies = searchResponse.filter(card => {
        const duration = card.duration;
        if (duration <= 40) {
          return true
        }
        return false
      })
      localStorage.setItem('savedShortMovies', JSON.stringify(shortMovies))
      localStorage.setItem('savedMovies', JSON.stringify(searchResponse));
      setMovies(searchResponse);
      if (shortMovie) {
        if (shortMovies.length === 0) {
          setEmpty(true)
        }
        else {
          setEmpty(false);
        }
        setMovies(shortMovies)
      }
    }
    catch {
      console.log("What")
    }
    finally {
      setPreloaderVisibility(false);
    }
  };

  React.useEffect(() => {
    async function reSeacrh(data) {
      setPreloaderVisibility(true);
      try {
        const searchResponse = await savedMovies.filter(card => {
          const name = data;
          localStorage.setItem('savedSearch', name);
          if (card.nameRU.toLowerCase().includes(name)) {
            return true
          }
          return false
        });
        const shortMovies = searchResponse.filter(card => {
          const duration = card.duration;
          if (duration <= 40) {
            return true
          }
          return false
        })
        localStorage.setItem('savedShortMovies', JSON.stringify(shortMovies))
        localStorage.setItem('savedMovies', JSON.stringify(searchResponse));
        setMovies(searchResponse);
        if (shortMovie) {
          if (shortMovies.length === 0) {
            setEmpty(true)
          }
          else {
            setEmpty(false);
          }
          setMovies(shortMovies)
        }
      }
      catch {
        console.log("What");
      }
      finally {
        setPreloaderVisibility(false);
      }
    };
    reSeacrh(localStorage.getItem('savedSearch'))
  }, [savedMovies])

  function deleteCard(card) {
    api.deleteMovie(card._id).then(() => {
      api.getSavedMovies()
        .then((data) => {
          setSavedMovies(data);
        })
      setMovies((state) => state.filter((c => c._id !== card._id)));
    })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <main>
      <CurrentUserContext.Provider value={currentUser}>
        <SearchForm searchResponse={Seacrh} value={searchValue} />
        <FilterCheckBox onClick={changeShortMovie} isActive={shortMovie} />
        <Preloader visibility={preloaderVisibility} />
        <SavedMoviesCardList movies={movies} deleteCard={deleteCard} ifError={error} empty={empty} />
      </CurrentUserContext.Provider>
    </main>
  )
}

export default SavedMovies;