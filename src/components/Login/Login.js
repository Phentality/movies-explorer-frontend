import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate();

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
        mode: "onBlur"
    });

    /* const navigate = useNavigate();
 
     const handleSumbit = (e) => {
         e.preventDefault();
         if (!formValue.email || !formValue.password) {
             return;
         }
         Auth.authorize(formValue.email, formValue.password).then((data) => {
             if (data.token) {
                 setFormValue({ email: '', password: '' });
                 navigate('/', { replace: true });
                 localStorage.setItem('email', formValue.email);
                 props.handleLogin();
             }
         })
             .catch((err) => {
                 console.log(err);
             })
     }*/

    return (
        <main className='login'>
            <div className='login__container'>
                <button className="login__logo" onClick={handleMainNav}> <img src={logoPath} alt="Лого" /> </button>
                <h1 className='login__title'>Рады видеть!</h1>
                <form className='login__form' id="login-form">
                    <label className='login__label'>E-mail</label>
                    <input
                        className='login__input'
                        id='email'
                        type='email'
                        {...register("email", {
                            required: "Поле обязательно к заполнению",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Нужно ввести E-mail"
                              }
                        })}
                        placeholder="Email"
                        value={formValue.email}
                        onChange={handleChange} />
                    {!errors?.email && <span id="email-error" className="login__error"></span>}
                    {errors?.email && <span id="email-error" className="login__error">{errors?.email?.message || "Error!"}</span>}
                    <label className='login__label'>Пароль</label>
                    <input
                        className='login__input'
                        id='password'
                        {...register("password", {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 6,
                                message: "Минимум 6 символов"
                            },
                            maxLength: {
                                value: 30,
                                message: "Максимум 30 символов"
                            }
                        })}
                        placeholder="Пароль"
                        type='password'
                        value={formValue.password}
                        onChange={handleChange}
                        required />
                    {!errors?.password && <span id="password-error" className="login__error"></span>}
                    {errors?.password && <span id="password-error" className="login__error">{errors?.password?.message || "Error!"}</span>}
                    <button className="login__button" type="submit" aria-label="Войти" name="signin" value="">Войти</button>
                </form>
                <div className='login__signup'>
                    <h2 className='login__link-text'>Ещё не зарегистрированы?</h2>
                    <Link to="/signup" className='login__reg-link'>Регистрация</Link>
                </div>
            </div>
        </main>)
}

export default Login;