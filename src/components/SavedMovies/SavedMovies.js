import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckBox from '../Movies/FilterCheckBox/FilterCheckBox';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import api from '../../utils/MainApi';

function SavedMovies(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    api.getSavedMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  function deleteCard(card) {
    api.deleteMovie(card._id).then((data) =>{
        setMovies((state) => state.filter((c => c._id !== card._id)));
    })
    .catch((err) => {
        console.log(err);
    })
}
  return (
    <main>
      <CurrentUserContext.Provider value={currentUser}>
        <SearchForm />
        <FilterCheckBox />
        <SavedMoviesCardList movies={movies} deleteCard={deleteCard} />
      </CurrentUserContext.Provider>
    </main>
  )
}

export default SavedMovies;