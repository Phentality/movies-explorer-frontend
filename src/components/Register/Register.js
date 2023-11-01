import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import { useForm } from "react-hook-form";
import * as Auth from '../../utils/Auth';

function Register(props) {
    const navigate = useNavigate();
    const [confirmMessage, setConfirmMessage] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

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
    };

    const handleMainNav = () => {
        navigate('/')
    };

    const {
        register,
        formState: { errors },
    } = useForm({
        mode: "onChange"
    });

    function userLogin() {
        const { email, password } = formValue;
        Auth.authorize(email, password).then((data) => {
            if (data.token) {
                localStorage.setItem('jwt', data.token);
                navigate('/movies', { replace: true });
                props.handleLogin();
            }
        })
            .catch((err) => {
                console.log(err);
            })
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        const { name, email, password } = formValue;
        Auth.register(name, email, password).then((res) => {
            setErrorMessage('');
            setConfirmMessage("Пользователь успешно зарегистрирован");
            setTimeout(userLogin, 2000);
        })
        .catch((err) => {
                setConfirmMessage('');
                console.log(err);
                if (err === "Ошибка: 409") { setErrorMessage("Пользователь с таким email уже зарегистрирован") }
                if (err === "Ошибка: 400") { setErrorMessage("Не все поля заполнены") }
                else { setErrorMessage("Ошибка сервера") }
        })
    }

    const nameValidation = register('name', {
        required: "Поле обязательно к заполнению",
        minLength: {
            value: 2,
            message: "Минимум 2 символа"
        },
        maxLength: {
            value: 30,
            message: "Максимум 30 символов"
        }
    });

    const emailValidation = register('email', {
        required: "Поле обязательно к заполнению",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Нужно ввести E-mail"
        }

    });

    const passwordValidation = register('password', {
        required: "Поле обязательно к заполнению",
        minLength: {
            value: 6,
            message: "Минимум 6 символов"
        },
        maxLength: {
            value: 30,
            message: "Максимум 30 символов"
        },

    });

    return (
        <main className='register'>
            <div className='register__container'>
                <button className="register__logo" onClick={handleMainNav}> <img src={logoPath} alt="Лого" /> </button>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form className='register__form' id="register-form" onSubmit={handleSumbit} noValidate>
                    <label className='register__label'>Имя</label>
                    <input
                        className='register__input register__input_type_name'
                        id='name'
                        {...nameValidation}
                        placeholder="Имя"
                        type='text'
                        value={formValue.name}
                        onChange={e => {
                            nameValidation.onChange(e);
                            handleChange(e);
                        }} />
                    {!errors?.name && <span id="name-error" className="register__error"></span>}
                    {errors?.name && <span id="name-error" className="register__error">{errors?.name?.message || "Error!"}</span>}
                    <label className='register__label'>E-mail</label>
                    <input
                        className='register__input register__input_type_email'
                        id='email'
                        {...emailValidation}
                        placeholder="Email"
                        type='email'
                        value={formValue.email}
                        onChange={e => {
                            emailValidation.onChange(e);
                            handleChange(e);
                        }} />
                    {!errors?.email && <span id="email-error" className="register__error"></span>}
                    {errors?.email && <span id="email-error" className="register__error">{errors?.email?.message || "Error!"}</span>}
                    <label className='register__label'>Пароль</label>
                    <input
                        className='register__input register__input_type_password'
                        id='password'
                        {...passwordValidation}
                        placeholder="Пароль"
                        type='password'
                        value={formValue.password}
                        onChange={e => {
                            passwordValidation.onChange(e);
                            handleChange(e);
                        }} />
                    {!errors?.password && <span id="password-error" className="register__error"></span>}
                    {errors?.password && <span id="password-error" className="register__error">{errors?.password?.message || "Error!"}</span>}
                    <h2 className={`register__none ${confirmMessage !== '' ? 'register__confirm-message' : ''} ${errorMessage !== '' ? 'register__error-message' : ''}`}>{confirmMessage}{errorMessage}</h2>
                    <button className={`register__button ${errors?.name || errors?.email || errors?.password ? 'register__button-disabled' : ''}`} type="submit" aria-label="Зарегистрироваться" name="signup" value="" disabled={errors?.name || errors?.email || errors?.password}>Зарегистрироваться</button>
                </form>
                <div className='register__signin'>
                    <h2 className='register__link-text'>Уже зарегистрированы?</h2>
                    <Link to="/signin" className='register__login-link'>Войти</Link>
                </div>
            </div>
        </main>)
}

export default Register;