import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import { useForm } from "react-hook-form";
import * as Auth from '../../utils/Auth';

function Login(props) {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState('');

    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
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

    const handleSumbit = (e) => {
        e.preventDefault();
        if (!formValue.email || !formValue.password) {
            return;
        }
        Auth.authorize(formValue.email, formValue.password).then((data) => {
            if (data.token) {
                localStorage.setItem('jwt', data.token);
                setFormValue({ email: '', password: '' });
                navigate('/', { replace: true });
                props.handleLogin();
            }
        })
            .catch((err) => {
                console.log(err);
                if (err === "Ошибка: 401") { setErrorMessage("Неправильно введены данные") }
                else { setErrorMessage("Ошибка сервера") };
            })
    };

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
        <main className='login'>
            <div className='login__container'>
                <button className="login__logo" onClick={handleMainNav}> <img src={logoPath} alt="Лого" /> </button>
                <h1 className='login__title'>Рады видеть!</h1>
                <form className='login__form' id="login-form" onSubmit={handleSumbit} noValidate>
                    <label className='login__label'>E-mail</label>
                    <input
                        className='login__input'
                        id='email'
                        type='email'
                        {...emailValidation}
                        placeholder="Email"
                        value={formValue.email}
                        onChange={e => {
                            emailValidation.onChange(e);
                            handleChange(e);
                        }}/>
                    {!errors?.email && <span id="email-error" className="login__error"></span>}
                    {errors?.email && <span id="email-error" className="login__error">{errors?.email?.message || "Error!"}</span>}
                    <label className='login__label'>Пароль</label>
                    <input
                        className='login__input'
                        id='password'
                        {...passwordValidation}
                        placeholder="Пароль"
                        type='password'
                        value={formValue.password}
                        onChange={e => {
                            passwordValidation.onChange(e);
                            handleChange(e);
                        }} />
                    {!errors?.password && <span id="password-error" className="login__error"></span>}
                    {errors?.password && <span id="password-error" className="login__error">{errors?.password?.message || "Error!"}</span>}
                    <h2 className={`register__none ${errorMessage !== '' ? 'register__error-message' : ''}`}>{errorMessage}</h2>
                    <button className={`login__button ${errors?.email || errors?.password ? 'login__button-disabled' : ''}`} type="submit" aria-label="Войти" name="signin" value="" disabled={errors?.email || errors?.password}>Войти</button>
                </form>
                <div className='login__signup'>
                    <h2 className='login__link-text'>Ещё не зарегистрированы?</h2>
                    <Link to="/signup" className='login__reg-link'>Регистрация</Link>
                </div>
            </div>
        </main>)
}

export default Login;