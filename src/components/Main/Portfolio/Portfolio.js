import React from 'react';


function Portfolio() {

    return (
        <div className='portfolio'>
            <header className='portfolio__header'>
                <h1 className='portfolio__title'>Портфолио</h1>
            </header>
            <div className='portfolio__link-container'>
                <a href='https://github.com/Phentality/how-to-learn' className='portfolio__link-text'>Статичный сайт</a>
                <a href='https://github.com/Phentality/how-to-learn' className='portfolio__link-image'>↗</a>
            </div>
            <div className='portfolio__link-container'>
                <a href='https://phentality.github.io/russian-travel/' className='portfolio__link-text'>Адаптивный сайт</a>
                <a href='https://phentality.github.io/russian-travel/' className='portfolio__link-image'>↗</a>
            </div>
            <div className='portfolio__link-container portfolio__last-link'>
                <a href='https://phentality.nomoredomainsrocks.ru/signin' className='portfolio__link-text'>Одностраничное приложение</a>
                <a href='https://phentality.nomoredomainsrocks.ru/signin' className='portfolio__link-image'>↗</a>
            </div>
        </div>)
}

export default Portfolio;