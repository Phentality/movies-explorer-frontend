import React from 'react';

function AboutProject() {

  return (
    <section className='about-project' id="anchor">
      <div className='about-project__header'>
        <h2 className='about-project__header-text'>О проекте</h2>
      </div>
      <div className='about-project__content'>
        <h2 className='about-project__content-title'>Дипломный проект включал 5 этапов</h2>
        <p className='about-project__content-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h2 className='about-project__content-title'>На выполнение диплома ушло 5 недель</h2>
        <p className='about-project__content-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className='about-project__time'>
        <div className='about-project__backtime-image'>
          <p className='about-project__text'>1 неделя</p>
        </div>
        <div className='about-project__fronttime-image'>
          <p className='about-project__text about-project__white-text'>4 недели</p>
        </div>
        <p className='about-project__text about-project__gray-text'>Back-end</p>
        <p className='about-project__text about-project__gray-text'>Front-end</p>
      </div>
    </section>)
}

export default AboutProject;