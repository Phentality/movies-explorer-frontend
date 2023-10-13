import React from 'react';
/*import { CurrentUserContext } from '../../contexts/CurrentUserContext';*/

function Profile() {
    /*const currentUser = React.useContext(CurrentUserContext);*/

    let currentUser = {
        name: "Виталий",
        email: "pochta@yandex.ru"
    }
    return (
        <section className='profile'>
            <h1 className='profile__title'>Привет, {currentUser.name}</h1>
            <div className='profile__container'>
                <h2 className='profile__text profile__static-text'>Имя</h2>
                <h2 className='profile__text'>{currentUser.name}</h2>
            </div>
            <div className='profile__container'>
                <h2 className='profile__text profile__static-text'>E-mail</h2>
                <h2 className='profile__text'>{currentUser.email}</h2>
            </div>
            <div className='profile__button-container'>
                <button className='profile__button profile__edit-button'>Редактировать</button>
                <button className='profile__button profile__logout-button'>Выйти из аккаунта</button>
            </div>
        </section>)
}

export default Profile;