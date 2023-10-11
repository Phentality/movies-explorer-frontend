import React from 'react';


function Techs() {

    return (
        <section className='techs'>
            <header className='techs__header'>
                <h1 className='techs__header-text'>Технологии</h1>
            </header>
            <h2 className='techs__text techs__title'>7 технологий</h2>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__technologies'>
                <li className='techs__card'><p className='techs__text techs__card-text'>HTML</p></li>
                <li className='techs__card'><p className='techs__text techs__card-text'>CSS</p></li>
                <li className='techs__card'><p className='techs__text techs__card-text'>JS</p></li>
                <li className='techs__card'><p className='techs__text techs__card-text'>React</p></li>
                <li className='techs__card'><p className='techs__text techs__card-text'>Git</p></li>
                <li className='techs__card'><p className='techs__text techs__card-text'>Express.js</p></li>
                <li className='techs__card'><p className='techs__text techs__card-text'>mongoDB</p></li>
            </ul>
        </section>)
}

export default Techs;