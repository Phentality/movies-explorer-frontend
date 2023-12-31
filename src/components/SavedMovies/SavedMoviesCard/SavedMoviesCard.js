import React from 'react';

function SavedMoviesCard({ card, onCardDelete }) {
    const minutes = card.duration % 60;
    const hours = (card.duration - minutes) / 60;
    const duration = (hours < 10 ? "0" : "") + hours.toString() + "ч " + (minutes < 10 ? "0" : "") + minutes.toString() + "м";

    function handleCardDelete() {
        onCardDelete(card);
    }
    return (
        <li className="movies-card">
            <div className="movies-card__title-container">
                <h2 className='movies-card__title'>{card.nameRU}</h2>
                <h3 className='movies-card__duration'>{duration}</h3>
            </div>
            <a href={card.trailerLink} className="movies-card__link" target="_blank" rel="noreferrer">
                <img className="movies-card__image" src={card.image} alt={card.nameRU} />
            </a>
            <div className="movies-card__saved-container">
                <button className="movies-card__saved-delbtn" type="button" aria-label="удалить" name="delete" onClick={handleCardDelete}></button>
            </div>
        </li>
    )
}

export default SavedMoviesCard;