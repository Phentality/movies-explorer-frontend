import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [onEdit, setOnEdit] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [same, setSame] = React.useState(true);

    const handleEditButton = () => {
        setOnEdit(true);
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);


    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            await props.onUpdateUser({
                name,
                email,
            });
            setOnEdit(false);
        }
        catch {
            setOnEdit(true);
        }
    }

    React.useEffect(() => {
        if (name === currentUser.name && email === currentUser.email) {
            setSame(true)
        }
        else {
            setSame(false)
        }
    }, [currentUser.email, currentUser.name, email, name, onEdit]);

    const handleContent = () => {
        if (!onEdit) {
            return (<>
                <div className='profile__container'>
                    <h2 className='profile__text profile__static-text'>Имя</h2>
                    <h2 className='profile__text'>{currentUser.name}</h2>
                </div>
                <div className='profile__container profile__without-border'>
                    <h2 className='profile__text profile__static-text'>E-mail</h2>
                    <h2 className='profile__text'>{currentUser.email}</h2>
                </div>
                <h2 className={`register__none ${props.errorMessage !== '' ? 'register__error-message' : ''}`}>{props.errorMessage}</h2>
                <div className='profile__button-container'>
                    <button className='profile__button profile__edit-button' onClick={handleEditButton}>Редактировать</button>
                    <button className='profile__button profile__logout-button' onClick={props.handleLogOut}>Выйти из аккаунта</button>
                </div></>)
        }
        else {
            return (<>
                <form onSubmit={handleSubmit} noValidate>
                    <div className='profile__container'>
                        <h2 className='profile__text profile__static-text'>Имя</h2>
                        <input className='profile__input' type="text" onChange={handleChangeName} value={name} />
                    </div>
                    <div className='profile__container profile__without-border'>
                        <h2 className='profile__text profile__static-text'>E-mail</h2>
                        <input className='profile__input' type="email" onChange={handleChangeEmail} value={email} />
                    </div>
                    <h2 className={`register__none ${props.errorMessage !== '' ? 'register__error-message' : ''}`}>{props.errorMessage}</h2>
                    <div className='profile__button-container'>
                        <button className={`profile__submit-button ${same ? 'profile__disabled-button' : ''}`} type='submit' aria-label="Сохранить" name="safe" disabled={same}>Сохранить</button>
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