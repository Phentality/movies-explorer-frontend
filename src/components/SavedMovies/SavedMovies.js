import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckBox from '../Movies/FilterCheckBox/FilterCheckBox';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedMovies(props) {
  const currentUser = React.useContext(CurrentUserContext);



  return (
    <main>
      <CurrentUserContext.Provider value={currentUser}>
        <SearchForm />
        <FilterCheckBox />
        <SavedMoviesCardList />
      </CurrentUserContext.Provider>
    </main>
  )
}

export default SavedMovies;