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
        <div className={`navigation ${isOpened ? 'navigation-visible' : ''}`}>
            <ul className='navigation__container'>
                <button className="navigation__close" onClick={onClose} aria-label="Закрыть" name="close" value="" />
                <li className='navigation__link-container'><Link to="/" className={handleUnderlineMain()}>Главная</Link></li>
                <li className='navigation__link-container'><Link to="/movies" className={handleUnderlineFilms()}>Фильмы</Link></li>
                <li className='navigation__link-container'><Link to="/saved-movies" className={handleUnderlineSavedFilms()}>Сохранённые фильмы</Link></li>
                <li className='navigation__link-container'><Link to="/profile" className='header__profile-text-button'>Аккаунт</Link>
                    <button className="header__profile-button header__profile-button_dark" onClick={handleProfileNav}><img className='header__profile-button-image' src={accountPath} alt="Профиль" /></button></li>

            </ul>
        </div>
    )
}

export default Navigation;