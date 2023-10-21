import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {

    const location = useLocation();

    function handleVisibility() {
        if (location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/not-found' || location.pathname === '/profile') {
            return ("footer footer-none");
        }
        else {
            return ('footer');
        }
    }

    return (
        <footer className={handleVisibility()}>
            <div className='footer__text-container'>
                <h1 className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</h1>
            </div>
            <div className='footer__sign-container'>
                <h2 className='footer__text footer__year'>© 2023</h2>
                <div className='footer__link-container'>
                    <a href='https://practicum.yandex.ru/' className="footer__text footer__year footer__link" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
                    <a href='https://github.com/Phentality' className="footer__text footer__year footer__link" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </footer>)
}

export default Footer;