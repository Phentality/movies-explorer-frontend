import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm(props) {
    const location = useLocation();
    const valueRef = React.useRef('');
    const [formValue, setFormValue] = React.useState({
        film: '',
    });
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        valueRef.current.value = props.value;
    }, [props.value]);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
        if (location.pathname === '/movies') {
            localStorage.setItem('search', value);
        }
        if (location.pathname === '/saved-movies') {
            localStorage.setItem('savedSearch', value);
        }
    };


    function handleSubmit(e) {
        e.preventDefault();

        if (valueRef.current.value === '') {
            setError(true);
        }
        else {
            setError(false);
            props.searchResponse({
                value: valueRef.current.value.toLowerCase()
            });
        }
    }

    return (
        <section className='search-form'>
            <form className='search-form__container' onSubmit={handleSubmit} noValidate>
                <input className='search-form__form'
                    id='film'
                    name='film'
                    placeholder="Фильм"
                    ref={valueRef}
                    onChange={handleChange} />
                <button className="search-form__button" type="submit" aria-label="Поиск" name="search">Поиск</button>
            </form>
            {!error && <span id="search-form-error" className="search-form__error"></span>}
            {error && <span id="search-form-error" className="search-form__error">Введите ключевое слово</span>}
        </section>)
}

export default SearchForm;