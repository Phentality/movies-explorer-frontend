import React from 'react';
import contentLogoPath from '../../../images/Landing-logo.svg';


function Promo() {

  return (
    <div className='promo'>
      
      <section className='promo-content'>
        <div className='promo-content__container'>
          <div className='promo-content__text-content'>
            <h1 className='promo-content__title'>Учебный проект студента факультета<br /> Веб-разработки.</h1>
            <p className='promo-content__info'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </div>
          <img className='promo-content__logo' src={contentLogoPath} alt="Логотип" />
        </div>
        <button className="promo-content__button" aria-label="Узнать" name="learn-more" value="">Узнать больше</button>
      </section>
    </div>)
}

export default Promo;