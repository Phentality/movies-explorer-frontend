import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckBox from '../Movies/FilterCheckBox/FilterCheckBox';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedMovies(props) {
  const currentUser = React.useContext(CurrentUserContext);



  return (
    <section>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <SearchForm />
        <FilterCheckBox />
        <SavedMoviesCardList />
        <Footer />
      </CurrentUserContext.Provider>
    </section>
  )
}

export default SavedMovies;