import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {

    const navigate = useNavigate();

    return (
        <section className='notfound'>
            <h1 className='notfound__title'>404</h1>
            <p className='notfound__text'>Страница не найдена</p>
            <button onClick={() => navigate(-3)} className='notfound__button'>Назад</button>
        </section>)
}

export default NotFound;