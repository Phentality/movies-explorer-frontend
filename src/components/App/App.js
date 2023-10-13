import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  const currentUser = React.useContext(CurrentUserContext);
  /*const [currentUser, setCurrentUser] = React.useState({});*/
  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
