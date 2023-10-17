import React from 'react';
import { useNavClose } from "../../hooks/useNavClose";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import accountPath from '../../images/profile-icon.svg'

function Navigation({ isOpened, onClose }) {
    useNavClose(isOpened, onClose)
    const navigate = useNavigate();
    const location = useLocation();

    const handleProfileNav = () => {
        navigate('/profile')
    }

    function handleUnderlineMain() {
        if (location.pathname === '/') {
            return ("navigation__button navigation__text-underline");
        }
        else {
            return ('navigation__button');
        }
    }

    function handleUnderlineFilms() {
        if (location.pathname === '/movies') {
            return ("navigation__button navigation__text-underline");
        }
        else {
            return ('navigation__button');
        }
    }

    function handleUnderlineSavedFilms() {
        if (location.pathname === '/saved-movies') {
            return ("navigation__button navigation__text-underline");
        }
        else {
            return ('navigation__button');
        }
    }

    return (
        <div className={`navigation ${isOpened ? 'navigation__visible' : ''}`}>
            <div className='navigation__container'>
                <button className="navigation__close" onClick={onClose} aria-label="Закрыть" name="close" value="" />
                <Link to="/" className={handleUnderlineMain()}>Главная</Link>
                <Link to="/movies" className={handleUnderlineFilms()}>Фильмы</Link>
                <Link to="/saved-movies" className={handleUnderlineSavedFilms()}>Сохранённые фильмы</Link>
                <button className="header__profile-button" onClick={handleProfileNav}><img className='header__profile-button-image' src={accountPath} alt="Профиль" /></button>
            </div>
        </div>
    )
}

export default Navigation;