import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

function Login() {
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
    }
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
        <section className='login'>
            <div className='login__container'>
                <img className='login__logo' alt='Logo' src={logoPath} />
                <p className='login__title'>Рады видеть!</p>
                <form className='login__form'>
                    <label className='login__label'>E-mail</label>
                    <input
                        className='login__input'
                        id='email' name='email'
                        placeholder="Email"
                        type='email'
                        value={formValue.email}
                        onChange={handleChange}
                        required />
                    <span id="email-error" className="login__error"></span>
                    <label className='login__label'>Пароль</label>
                    <input
                        className='login__input'
                        id='password'
                        name='password'
                        placeholder="Пароль"
                        type='password'
                        value={formValue.password}
                        onChange={handleChange}
                        required />
                    <span id="password-error" className="login__error"></span>
                    <button className="login__button" type="submit" aria-label="Войти" name="signin" value="">Войти</button>
                </form>
                <div className='login__signup'>
                    <h2 className='login__link-text'>Ещё не зарегистрированы?</h2>
                    <Link to="/signup" className='login__reg-link'>Регистрация</Link>
                </div>
            </div>
        </section>)
}

export default Login;