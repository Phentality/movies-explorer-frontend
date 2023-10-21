import React from 'react';
import { useNavigate } from 'react-router-dom';
/*import { CurrentUserContext } from '../../contexts/CurrentUserContext';*/

function Profile() {
    /*const currentUser = React.useContext(CurrentUserContext);*/
    const navigate = useNavigate();
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

    const handleMainNav = () => {
        navigate('/')
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
                    <button className='profile__button profile__logout-button' onClick={handleMainNav}>Выйти из аккаунта</button>
                </div></>)
        }
        else { return (<><form>
            <div className='profile__container'>
                <h2 className='profile__text profile__static-text'>Имя</h2>
                <input className='profile__input' value={currentUser.name} />
            </div>
            <div className='profile__container profile__without-border'>
                <h2 className='profile__text profile__static-text'>E-mail</h2>
                <input className='profile__input' value={currentUser.email}/>
            </div>
            <div className='profile__button-container'>
                <button className="profile__submit-button" onClick={handleSubmitButton} aria-label="Сохранить" name="safe" value="">Сохранить</button>
            </div>
        </form></>) }
    }
    return (
        <main className='profile'>
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            {handleContent()}
        </main>)
}

export default Profile;