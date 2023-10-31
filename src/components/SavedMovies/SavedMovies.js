import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckBox from '../Movies/FilterCheckBox/FilterCheckBox';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import api from '../../utils/MainApi';

function SavedMovies(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [allSavedMovies, setAllSavedMovies] = React.useState([]);
  const searchValue = '';
  const [movies, setMovies] = React.useState([]);
  const [shortMovie, setShortMovie] = React.useState(false)
  const [error, setError] = React.useState('');
  const [preloaderVisibility, setPreloaderVisibility] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  const savedSearch = localStorage.getItem('savedSearch');
  const savedSearchFilter = localStorage.getItem('savedSearchFilter');

  React.useEffect(() => {
    api.getSavedMovies()
    .then((data) => {
      setMovies(data);
      setAllSavedMovies(data);
    })
  }, [])

  React.useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(movies));
  }, [movies])

  function changeShortMovie() {
    setShortMovie(!shortMovie);
  }
  
  React.useEffect(() => {
    localStorage.setItem('savedSearchFilter', shortMovie);
  }, [shortMovie]);

  React.useEffect(() => {
    setPreloaderVisibility(true);
    try {
      const searchResponse = allSavedMovies.filter(card => {
        const name = savedSearch;
        if (card.nameRU.toLowerCase().includes(name)) {
          return true
        }
        return false
      })
      const shortMovies = searchResponse.filter(card => {
        const duration = card.duration;
        if (duration <= 40) {
          return true
        }
        return false
      })
      setError('');
      setMovies(searchResponse);
      if (shortMovie) {
        setError('');
        setMovies(shortMovies);
      }
    }
    catch {
      setError('Что-то пошло не так');
    }
    finally {
      setPreloaderVisibility(false);
    }
  }, [savedSearch, savedSearchFilter, shortMovie])


  async function Seacrh(data) {
    setPreloaderVisibility(true);
    try {
      const searchResponse = await allSavedMovies.filter(card => {
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

  function deleteCard(card) {
    api.deleteMovie(card._id).then(() => {
      api.getSavedMovies()
        .then((data) => {
          setAllSavedMovies(data);
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