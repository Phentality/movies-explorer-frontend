import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckBox from './FilterCheckBox/FilterCheckBox';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import api from '../../utils/MainApi';

function Movies(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const cards = props.movies;
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isSaved, setIsSaved] = React.useState(false);

  React.useEffect(() => {
    api.getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  function Seacrh(data) {
    const movies = cards.filter(card => {
      setSearchValue(data.value);
      if (card.nameRU.toLowerCase().includes(data.value)) {
        return true
      }
      return false
    });
    setMovies(movies);
  };

  function changeButton(id) {
    console.log(id);
    setIsSaved(!isSaved);
  }

  localStorage.setItem('search', searchValue);
  localStorage.setItem('movies', JSON.stringify(movies));
  return (
    <main>
      <CurrentUserContext.Provider value={currentUser}>
        <SearchForm searchResponse={Seacrh} />
        <FilterCheckBox />
        <MoviesCardList movies={movies} isSaved={isSaved} changeButton={changeButton} />
      </CurrentUserContext.Provider>
    </main>
  )
}

export default Movies;