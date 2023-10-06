import React from 'react';
import photo from '../../../images/Foto.png';


function AboutMe() {

    return (
        <div className='about-me'>
            <header className='about-me__header'>
                <h1 className='about-me__header-text'>Студент</h1>
            </header>
            <section className='about-me__content'>
                <div className='about-me__container'>
                    <div className='about-me__text-content'>
                        <h1 className='about-me__title'>Азат</h1>
                        <p className='about-me__info'>Фронтенд-разработчик, 29 лет</p>
                        <p className='about-me__info'>Я родился и живу в Уфе, закончил юридический факультет Башкирского института социальный технологоий.
                            Я люблю слушать музыку, а ещё увлекаюсь компьютерной техникой. Недавно начал кодить. С 2020 года работаю в компании типографии начальником производства. После того, как прошёл курс по веб-разработке, начал активно искать работу для смены постоянной работы.</p>
                    </div>
                    <a href='https://github.com/Phentality' className="about-me__link" value="">Github</a>
                    <img className='about-me__photo' src={photo} alt="Логотип" />
                </div>
            </section>
        </div>)
}

export default AboutMe;