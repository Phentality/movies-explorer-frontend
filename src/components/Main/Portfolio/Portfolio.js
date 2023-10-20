import React from 'react';


function Portfolio() {

    return (
        <div className='portfolio'>
            <div className='portfolio__header'>
                <h1 className='portfolio__title'>Портфолио</h1>
            </div>
            <div className='portfolio__link-container'>
                <a href='https://github.com/Phentality/how-to-learn' className='portfolio__link-text' target="_blank" rel="noopener noreferrer">Статичный сайт</a>
                <a href='https://github.com/Phentality/how-to-learn' className='portfolio__link-image' target="_blank" rel="noopener noreferrer">↗</a>
            </div>
            <div className='portfolio__link-container'>
                <a href='https://phentality.github.io/russian-travel/' className='portfolio__link-text' target="_blank" rel="noopener noreferrer">Адаптивный сайт</a>
                <a href='https://phentality.github.io/russian-travel/' className='portfolio__link-image' target="_blank" rel="noopener noreferrer">↗</a>
            </div>
            <div className='portfolio__link-container portfolio__last-link'>
                <a href='https://phentality.nomoredomainsrocks.ru/signin' className='portfolio__link-text' target="_blank" rel="noopener noreferrer">Одностраничное приложение</a>
                <a href='https://phentality.nomoredomainsrocks.ru/signin' className='portfolio__link-image' target="_blank" rel="noopener noreferrer">↗</a>
            </div>
        </div>)
}

export default Portfolio;