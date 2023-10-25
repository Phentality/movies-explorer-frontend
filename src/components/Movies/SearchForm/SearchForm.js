import React from 'react';


function SearchForm(props) {
    const valueRef = React.useRef();
    const [formValue, setFormValue] = React.useState({
        film: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    };

    function handleSubmit(e) {
      e.preventDefault();
  
      props.searchResponse({
        value: valueRef.current.value.toLowerCase()
      });
    }

    return (
        <section className='search-form'>
            <form className='search-form__container' onSubmit={handleSubmit} noValidate>
                <input className='search-form__form'
                    id='film'
                    name='film'
                    placeholder="Фильм"
                    ref={valueRef}
                    onChange={handleChange}
                    required />
                <button className="search-form__button" type="submit" aria-label="Поиск" name="search">Поиск</button>
            </form>
        </section>)
}

export default SearchForm;