import React from 'react';

function Portfolio() {

    const singlePageApp = 'https://phentality.nomoredomainsrocks.ru/signin';
    const adaptiveSite = 'https://phentality.github.io/russian-travel/';
    const staticSite = 'https://github.com/Phentality/how-to-learn';

    return (
        <section className='portfolio'>
            <div className='portfolio__header'>
                <h2 className='portfolio__title'>Портфолио</h2>
            </div>
            <a className='portfolio__link-container' href={staticSite} target="_blank" rel="noopener noreferrer">
                <span className='portfolio__link-text'>Статичный сайт</span>
                <span className='portfolio__link-image'>↗</span>
            </a>
            <a className='portfolio__link-container' href={adaptiveSite} target="_blank" rel="noopener noreferrer">
                <span className='portfolio__link-text'>Адаптивный сайт</span>
                <span className='portfolio__link-image'>↗</span>
            </a>
            <a className='portfolio__link-container portfolio__last-link' href={singlePageApp} target="_blank" rel="noopener noreferrer">
                <span className='portfolio__link-text'>Одностраничное приложение</span>
                <span className='portfolio__link-image'>↗</span>
            </a>
        </section>)
}

export default Portfolio;