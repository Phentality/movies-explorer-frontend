import React from 'react';
import photo from '../../../images/Foto.png';


function AboutMe() {

    return (
        <section className='about-me'>
            <div className='about-me__header'>
                <h2 className='about-me__header-text'>Студент</h2>
            </div>
            <section className='about-me__content'>
                <div className='about-me__container'>
                    <img className='about-me__photo' src={photo} alt="Логотип" />
                    <div className='about-me__text-content'>
                        <h2 className='about-me__title'>Азат</h2>
                        <p className='about-me__info'>Фронтенд-разработчик, 29 лет</p>
                        <p className='about-me__info about-me__info-text'>Я родился и живу в Уфе, закончил юридический факультет Башкирского института социальный технологоий.
                            Я люблю слушать музыку, а ещё увлекаюсь компьютерной техникой. Недавно начал кодить. С 2020 года работаю в типографии начальником производства. После того, как прошёл курс по веб-разработке, начал активно искать работу для смены постоянной работы.</p>
                    </div>
                    <a href='https://github.com/Phentality' className="about-me__link" value="" target="_blank" rel="noopener noreferrer">Github</a>      
                </div>
            </section>
        </section>)
}

export default AboutMe;