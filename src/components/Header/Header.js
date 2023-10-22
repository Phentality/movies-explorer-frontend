import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logoPath from '../../images/logo.svg';
import burger from '../../images/Burger-button.svg'
import accountPath from '../../images/profile-icon.svg'


function Header(props) {
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  function closeBurger() {
    setIsBurgerOpen(false);
  }

  function handleBurgerClick() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  const navigate = useNavigate();
  const location = useLocation();

  function handleBackground() {
    if (location.pathname === '/') {
      return ("header");
    }
    if (location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/not-found') {
      return ("header header-none");
    }
    else {
      return ('header header-black');
    }
  }

  function handleBoldFilms() {
    if (location.pathname === '/movies') {
      return ("header__films-button header__text-bold");
    }
    else {
      return ('header__films-button');
    }
  }

  function handleBoldSavedFilms() {
    if (location.pathname === '/saved-movies') {
      return ("header__saved-films-button header__text-bold");
    }
    else {
      return ('header__saved-films-button');
    }
  }

  function handleProfileButtonBackground() {
    if (location.pathname === '/') {
      return ("header__profile-button");
    }
    else {
      return ("header__profile-button header__profile-button_dark")
    }
  }

  const handleInNav = () => {
    navigate('/signin');
  }

  const handleMainNav = () => {
    navigate('/')
  }

  const handleProfileNav = () => {
    navigate('/profile')
  }

  const handleAuth = () => {
    if (props.loggedIn) {
      return (<><div className='header__burger-button-container'>
        <button className='header__burger-button' onClick={handleBurgerClick}> <img src={burger} alt="Бургер" /> </button>
      </div>
        <div className='header__buttons-container'>
          <div className='header__films-container'>
            <Link to="/movies" className={handleBoldFilms()}>Фильмы</Link>
            <Link to="/saved-movies" className={handleBoldSavedFilms()}>Сохранённые фильмы</Link>
          </div>
          <div className='header__profile-container'>
            <Link to="/profile" className='header__profile-text-button'>Аккаунт</Link>
            <button className={handleProfileButtonBackground()} onClick={handleProfileNav}><img className='header__profile-button-image' src={accountPath} alt="Профиль" /></button>
          </div>
        </div>
      </>)
    }
    else {
      return (<div className="header__button-container">
        <Link to="/signup" className='header__reg-button'>Регистрация</Link>
        <button className="header__enter-button" onClick={handleInNav} aria-label="Войти" name="enter" value="">Войти</button>
      </div>)
    }
  }

  return (
    <header className={handleBackground()}>
      <Navigation onClose={closeBurger} isOpened={isBurgerOpen} />
      <div className='header__content'>
        <button className="header__logo" onClick={handleMainNav}> <img src={logoPath} alt="Лого" /> </button>
        {handleAuth()}
      </div>
    </header>)
}

export default Header;