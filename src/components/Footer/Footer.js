import React from 'react';

function Footer() {

    return (
        <footer className="footer">
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