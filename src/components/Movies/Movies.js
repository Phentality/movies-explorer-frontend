import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckBox from './FilterCheckBox/FilterCheckBox';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movies(props) {
  const currentUser = React.useContext(CurrentUserContext);



  return (
    <main>
      <CurrentUserContext.Provider value={currentUser}>
        <SearchForm />
        <FilterCheckBox />
        <MoviesCardList />
      </CurrentUserContext.Provider>
    </main>
  )
}

export default Movies;