import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import { useForm } from "react-hook-form";

function Register() {
    const navigate = useNavigate();

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
        mode: "onBlur"
    });

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
        <main className='register'>
            <div className='register__container'>
                <button className="register__logo" onClick={handleMainNav}> <img src={logoPath} alt="Лого" /> </button>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form className='register__form' id="register-form">
                    <label className='register__label'>Имя</label>
                    <input
                        className='register__input register__input_type_name'
                        id='name'
                        {...register("name", {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 2,
                                message: "Минимум 2 символа"
                            },
                            maxLength: {
                                value: 30,
                                message: "Максимум 30 символов"
                            }
                        })}
                        placeholder="Имя"
                        type='text'
                        value={formValue.name}
                        onChange={handleChange} />
                    {!errors?.name && <span id="name-error" className="register__error"></span>}
                    {errors?.name && <span id="name-error" className="register__error">{errors?.name?.message || "Error!"}</span>}
                    <label className='register__label'>E-mail</label>
                    <input
                        className='register__input register__input_type_email'
                        id='email'
                        {...register("email", {
                            required: "Поле обязательно к заполнению",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Нужно ввести E-mail"
                              }
                        })}
                        placeholder="Email"
                        type='email'
                        value={formValue.email}
                        onChange={handleChange} />
                    {!errors?.email && <span id="name-error" className="register__error"></span>}
                    {errors?.email && <span id="email-error" className="register__error">{errors?.email?.message || "Error!"}</span>}
                    <label className='register__label'>Пароль</label>
                    <input
                        className='register__input register__input_type_password'
                        id='password'
                        {...register("password", {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 6,
                                message: "Минимум 6 символов"
                            },
                        })}
                        placeholder="Пароль"
                        type='password'
                        value={formValue.password}
                        onChange={handleChange} />
                    {!errors?.password && <span id="name-error" className="register__error"></span>}
                    {errors?.password && <span id="password-error" className="register__error">{errors?.password?.message || "Error!"}</span>}
                    <button className="register__button" type="submit" aria-label="Зарегистрироваться" name="signup" value="">Зарегистрироваться</button>
                </form>
                <div className='register__signin'>
                    <h2 className='register__link-text'>Уже зарегистрированы?</h2>
                    <Link to="/signin" className='register__login-link'>Войти</Link>
                </div>
            </div>
        </main>)
}

export default Register;