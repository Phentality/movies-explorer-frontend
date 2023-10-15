import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

function Register() {
    const [formValue, setFormValue] = React.useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    /* const handleSumbit = (e) => {
         e.preventDefault();
         const { name, email, password } = formValue;
         Auth.register(email, password).then(() => {
             props.openAffirmativePopup();
         })
             .catch((err) => {
                 console.log(err);
                 props.openNegativePopup();
             })
     }*/

    return (
        <section className='register'>
            <div className='register__container'>
                <img className='register__logo' alt='Logo' src={logoPath} />
                <p className='register__title'>Добро пожаловать!</p>
                <form className='register__form'>
                    <label className='register__label'>Имя</label>
                    <input
                        className='register__input'
                        id='name' name='name'
                        placeholder="Имя"
                        type='text'
                        value={formValue.name}
                        onChange={handleChange}
                        required />
                    <span id="name-error" className="register__error"></span>
                    <label className='register__label'>E-mail</label>
                    <input
                        className='register__input'
                        id='email' name='email'
                        placeholder="Email"
                        type='email'
                        value={formValue.email}
                        onChange={handleChange}
                        required />
                    <span id="email-error" className="register__error"></span>
                    <label className='register__label'>Пароль</label>
                    <input
                        className='register__input'
                        id='password'
                        name='password'
                        placeholder="Пароль"
                        type='password'
                        value={formValue.password}
                        onChange={handleChange}
                        required />
                    <span id="password-error" className="register__error"></span>
                    <button className="register__button" type="submit" aria-label="Зарегистрироваться" name="signup" value="">Зарегистрироваться</button>
                </form>
                <div className='register__signin'>
                    <h2 className='register__link-text'>Уже зарегистрированы?</h2>
                    <Link to="/signin" className='register__login-link'>Войти</Link>
                </div>
            </div>
        </section>)
}

export default Register;