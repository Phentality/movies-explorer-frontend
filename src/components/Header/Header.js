import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoPath from '../../images/logo.svg';


function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();

  function signOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('email');
    navigate('/signin', { replace: true });
  }
  function toSignIn() {
    navigate('/signin', { replace: true });
  }
  function toSignUp() {
    navigate('/signup', { replace: true });
  }

  function handleNav() {
    if (location.pathname === '/signin') {
      return (<button onClick={toSignUp} className='header__button'>Зарегистрироваться</button>)
    }
    if (location.pathname === '/signup') {
      return (<button onClick={toSignIn} className='header__button'>Войти</button>)
    }
    else {
      return (
        <div className='header__container'>
          <p className='header__text'>{props.email}</p>
          <button onClick={signOut} className='header__button'>Выйти</button>
        </div>
      )
    }
  }

  function handleBackground() {
    if (location.pathname === '/') {
      return ("header");
    }
    else {
      return ('header header-black');
    }
  }

  return (
    <header className={handleBackground()}>
      <div className='header__content'>
        <button className="header__logo"> <img src={logoPath} alt="Лого" /> </button>
        <div className="header__button-container">
          <button className='header__reg-button'>Регистрация</button>
          <button className="header__enter-button" aria-label="Войти" name="enter" value="">Войти</button>
        </div>
      </div>
    </header>)
}

export default Header;