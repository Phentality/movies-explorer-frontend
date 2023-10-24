import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import api from '../../utils/MainApi'
import * as Auth from '../../utils/Auth';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState({});
  const [allMovies, setAllMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    moviesApi.getInitialMovies()
      .then((data) => {
        setAllMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [loggedIn]);

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        Auth.checkToken(jwt).then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate('/', { replace: true });
          }
        })
      }}
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  const handleLogOut = () => {
    deleteAllCookies();
    navigate('/');
    localStorage.clear();
    setLoggedIn(false);
  }

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<ProtectedRoute loggedIn={loggedIn} component={Movies} movies={allMovies} />} />
          <Route path="/saved-movies" element={<ProtectedRoute loggedIn={loggedIn} component={SavedMovies} movies={allMovies} />} />
          <Route path="/profile" element={<ProtectedRoute loggedIn={loggedIn} component={Profile} handleLogOut={handleLogOut} />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;