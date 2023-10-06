import React from 'react';
import logoPath from '../../../images/logo.svg';
import contentLogoPath from '../../../images/Landing-logo.svg';


function Promo() {

  return (
    <div className='promo'>
      <header className="promo-header">
        <img className="promo-header__logo" src={logoPath} alt="Лого" />
        <div className="promo-header__button-container">
          <button className='promo-header__reg-button'>Регистрация</button>
          <button className="promo-header__enter-button" aria-label="Войти" name="enter" value="">Войти</button>
        </div>
      </header>
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