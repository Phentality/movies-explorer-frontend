import React from 'react';
import contentLogoPath from '../../../images/Landing-logo.svg';


function Promo() {

  return (
    <section className='promo'>
      <div className='promo-content'>
        <div className='promo-content__container'>
          <div className='promo-content__text-content'>
            <h1 className='promo-content__title'>Учебный проект студента факультета Веб<span>&#8209;</span>разработки.</h1>
            <p className='promo-content__info'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </div>
          <img className='promo-content__logo' src={contentLogoPath} alt="Логотип" />
        </div>
        <div className='promo-content__button-container'>
          <button className="promo-content__button" aria-label="Узнать" name="learn-more" value=""><a className='promo-content__button-text' href="#anchor">Узнать больше</a></button>
        </div>
      </div>
    </section>)
}

export default Promo;