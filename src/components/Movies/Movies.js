import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckBox from './FilterCheckBox/FilterCheckBox';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from './Preloader/Preloader'
import api from '../../utils/MainApi';

function Movies(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const cards = props.movies;
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [error, setError] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');
  const [isChange, setisChange] = React.useState(false);
  const [shortMovie, setShortMovie] = React.useState(false);
  const [preloaderVisibility, setPreloaderVisibility] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  const seacrhStorage = localStorage.getItem('search');
  const moviesStorage = JSON.parse(localStorage.getItem('movies'));
  const searchFilterStorage = JSON.parse(localStorage.getItem('searchFilter'));
  const shortMoviesStorage = JSON.parse(localStorage.getItem('shortMovies'));

  function changeShortMovie() {
    setShortMovie(!shortMovie);
    if (!shortMovie) {
      if (shortMoviesStorage === null) {
        setEmpty(true);
      }
      else {
        setEmpty(false);
        setError("");
        setMovies(shortMoviesStorage);
      }
    }
    else {
      if (moviesStorage === null) {
        setEmpty(true);
      }
      else {
        setError("");
        setEmpty(false);
        setMovies(moviesStorage);
      }
    }
  }

  React.useEffect(() => {
    setPreloaderVisibility(true);
    try {
      const searchResponse = cards.filter(card => {
        const name = seacrhStorage;
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
      localStorage.setItem('shortMovies', JSON.stringify(shortMovies))
      localStorage.setItem('movies', JSON.stringify(searchResponse));
      setError('');
      setMovies(searchResponse);
      if (searchFilterStorage) {
        setError('');
        setMovies(shortMovies)
      }
    }
    catch {
      setError('Что-то пошло не так');
    }
    finally {
      setPreloaderVisibility(false);
    }
  }, [cards, seacrhStorage, searchFilterStorage]);

  React.useEffect(() => {
    localStorage.setItem('searchFilter', shortMovie);
  }, [shortMovie]);

  React.useEffect(() => {
    if (seacrhStorage) {
      setSearchValue(seacrhStorage);
    }
    if (searchFilterStorage) {
      const status = searchFilterStorage;
      setShortMovie(status);
    }
    if (moviesStorage) {
      const pastMovies = moviesStorage;
      setMovies(pastMovies);
    }
    if (searchFilterStorage && shortMoviesStorage) {
      const pastShortMovies = shortMoviesStorage;
      setMovies(pastShortMovies);
    }
  }, [])

  React.useEffect(() => {
    api.getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [isChange]);

  async function Seacrh(data) {
    setPreloaderVisibility(true);
    try {
      const searchResponse = await cards.filter(card => {
        const name = data.value;
        if (card.nameRU.toLowerCase().includes(name)) {
          return true
        }
        return false
      })
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
      localStorage.setItem('shortMovies', JSON.stringify(shortMovies))
      localStorage.setItem('movies', JSON.stringify(searchResponse));
      setError('');
      setMovies(searchResponse);
      if (shortMovie) {
        if (shortMovies.length === 0) {
          setEmpty(true)
        }
        else {
          setEmpty(false);
        }
        setError('');
        setMovies(shortMovies)
      }
    }
    catch {
      setError('Что-то пошло не так');
    }
    finally {
      setPreloaderVisibility(false);
    }
  };

  async function saveCard(card) {
    await api.addMovie(card.country,
      card.director,
      card.duration,
      card.year,
      card.description,
      `https://api.nomoreparties.co${card.image.url}`,
      card.trailerLink,
      `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
      card.id,
      card.nameRU,
      card.nameEN)
    setisChange(!isChange);
  }

  async function deleteCard(card) {
    await api.deleteMovie(card._id);
    setisChange(!isChange);
  }

  return (
    <main>
      <CurrentUserContext.Provider value={currentUser}>
        <SearchForm searchResponse={Seacrh} value={searchValue} />
        <FilterCheckBox onClick={changeShortMovie} isActive={shortMovie} />
        <Preloader visibility={preloaderVisibility} />
        <MoviesCardList movies={movies} savedCards={savedMovies} ifError={error} saveCard={saveCard} deleteCard={deleteCard} empty={empty} />
      </CurrentUserContext.Provider>
    </main>
  )
}

export default Movies;