import React from 'react';


function SearchForm() {

    return (
        <section className='search-form'>
            <form className='search-form__container'>
                <input className='search-form__form'
                    id='film'
                    name='film'
                    placeholder="Фильм"
                    required />
                <button className="search-form__button" aria-label="Поиск" name="search" value="">Поиск</button>
            </form>
        </section>)
}

export default SearchForm;