import React from 'react';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckBox from './FilterCheckBox/FilterCheckBox';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movies(props) {
  const currentUser = React.useContext(CurrentUserContext);



  return (
    <section>
      <CurrentUserContext.Provider value={currentUser}>
        <SearchForm />
        <FilterCheckBox />
        <MoviesCardList />
        <Footer />
      </CurrentUserContext.Provider>
    </section>
  )
}

export default Movies;