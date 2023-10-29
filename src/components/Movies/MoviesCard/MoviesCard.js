import React from 'react';

function MoviesCard(props) {
    const movie = props.card;
    const savedMovies = props.savedCards;

    async function handleClickCard() {
        if (!isSaved) {
            props.onCardSave(movie);
        }
        try {
            const savedMovie = await savedMovies.filter((data) => {
                return data.id === props.card.id;
            });
            await props.onDeleteCard(savedMovie[0]);
        }
        catch {

        }
    }

    const isSaved = savedMovies.some((data) => {
        if (data.id === movie.id) {
            return true;
        }
        return false;
    });

    const imageUrl = props.card.image.url;
    const minutes = props.card.duration % 60;
    const hours = (props.card.duration - minutes) / 60;
    const duration = (hours < 10 ? "0" : "") + hours.toString() + "ч " + (minutes < 10 ? "0" : "") + minutes.toString() + "м";
    const cardSaveButtonClassName = (
        `${isSaved ? 'movies-card__savebtn_active' : 'movies-card__savebtn'}`
    );
    const cardNameChange = (
        `${isSaved ? '' : 'Сохранить'}`
    );

    return (
        <li className="movies-card">
            <div className="movies-card__title-container">
                <h2 className='movies-card__title'>{props.card.nameRU}</h2>
                <h3 className='movies-card__duration'>{duration}</h3>
            </div>
            <a href={props.card.trailerLink} className="movies-card__link" target="_blank" rel="noreferrer">
                <img className="movies-card__image" src={`https://api.nomoreparties.co/${imageUrl}`} alt={props.card.nameRU} />
            </a>
            <div className="movies-card__saved-container">
                <button className={cardSaveButtonClassName}
                    type="click"
                    aria-label="Сохранить"
                    name="save"
                    onClick={handleClickCard}>{cardNameChange}</button>
            </div>
        </li>
    )
}

export default MoviesCard;