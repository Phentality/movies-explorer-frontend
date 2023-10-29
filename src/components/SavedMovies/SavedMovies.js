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
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [preloaderVisibility, setPreloaderVisibility] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  

  React.useEffect(() => {
    api.getSavedMovies()
      .then((data) => {
          setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
    const seacrhStorage = localStorage.getItem('savedSearch');
    if (seacrhStorage !== 'null') {
      setSearchValue(seacrhStorage);
    }
    if (localStorage.getItem('savedMovies')) {
      const pastMovies = JSON.parse(localStorage.getItem('savedMovies'));
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
      localStorage.setItem('savedMovies', JSON.stringify(searchResponse));
      setMovies(searchResponse);
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
        localStorage.setItem('savedMovies', JSON.stringify(searchResponse));
        setMovies(searchResponse);
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
        <FilterCheckBox />
        <Preloader visibility={preloaderVisibility}/>
        <SavedMoviesCardList movies={movies} deleteCard={deleteCard} empty={empty} />
      </CurrentUserContext.Provider>
    </main>
  )
}

export default SavedMovies;