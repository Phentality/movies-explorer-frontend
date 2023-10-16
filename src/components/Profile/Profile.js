import React from 'react';
/*import { CurrentUserContext } from '../../contexts/CurrentUserContext';*/

function Profile() {
    /*const currentUser = React.useContext(CurrentUserContext);*/
    const [onEdit, setOnEdit] = React.useState(false);

    let currentUser = {
        name: "Виталий",
        email: "pochta@yandex.ru"
    }

    const handleEditButton = () => {
        setOnEdit(true);
    }

    const handleSubmitButton = () => {
        setOnEdit(false);
    }

    const handleContent = () => {
        if (!onEdit) {
            return (<><div className='profile__container'>
                <h2 className='profile__text profile__static-text'>Имя</h2>
                <h2 className='profile__text'>{currentUser.name}</h2>
            </div>
                <div className='profile__container profile__without-border'>
                    <h2 className='profile__text profile__static-text'>E-mail</h2>
                    <h2 className='profile__text'>{currentUser.email}</h2>
                </div>
                <div className='profile__button-container'>
                    <button className='profile__button profile__edit-button' onClick={handleEditButton}>Редактировать</button>
                    <button className='profile__button profile__logout-button'>Выйти из аккаунта</button>
                </div></>)
        }
        else { return (<><form>
            <div className='profile__container'>
                <h2 className='profile__text profile__static-text'>Имя</h2>
                <input className='profile__input' />
            </div>
            <div className='profile__container profile__without-border'>
                <h2 className='profile__text profile__static-text'>E-mail</h2>
                <input className='profile__input' />
            </div>
            <div className='profile__button-container'>
                <button className="profile__submit-button" onClick={handleSubmitButton} aria-label="Сохранить" name="safe" value="">Сохранить</button>
            </div>
        </form></>) }
    }
    return (
        <section className='profile'>
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            {handleContent()}
        </section>)
}

export default Profile;