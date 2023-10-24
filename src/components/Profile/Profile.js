import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [onEdit, setOnEdit] = React.useState(false);

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
                    <button className='profile__button profile__logout-button' onClick={props.handleLogOut}>Выйти из аккаунта</button>
                </div></>)
        }
        else {
            return (<><form>
                <div className='profile__container'>
                    <h2 className='profile__text profile__static-text'>Имя</h2>
                    <input className='profile__input' value={currentUser.name} />
                </div>
                <div className='profile__container profile__without-border'>
                    <h2 className='profile__text profile__static-text'>E-mail</h2>
                    <input className='profile__input' value={currentUser.email} />
                </div>
                <div className='profile__button-container'>
                    <button className="profile__submit-button" onClick={handleSubmitButton} aria-label="Сохранить" name="safe" value="">Сохранить</button>
                </div>
            </form></>)
        }
    }
    return (
        <main className='profile'>
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            {handleContent()}
        </main>)
}

export default Profile;