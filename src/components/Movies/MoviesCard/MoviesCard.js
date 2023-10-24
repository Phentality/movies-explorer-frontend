import React from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function MoviesCard({ card }) {

    /*function handleSaveClick() {
        onCardSave(card);
    }*/

    const currentUser = React.useContext(CurrentUserContext);
    /*const isSaved = card.likes.some(i => i === currentUser._id);
    const cardSaveButtonClassName = (
        `${isSaved ? 'movies-card__savebtn_active' : 'movies-card__savebtn'}`
    );*/
    const imageUrl = card.image.url;
    const minutes = card.duration % 60;

    const hours = (card.duration - minutes) / 60;

    const duration = (hours < 10 ? "0" : "") + hours.toString() + "ч " + (minutes < 10 ? "0" : "") + minutes.toString() + "м";

    return (
        <li className="movies-card">
            <div className="movies-card__title-container">
                <h2 className='movies-card__title'>{card.nameRU}</h2>
                <h3 className='movies-card__duration'>{duration}</h3>
            </div>
            <img className="movies-card__image" src={`https://api.nomoreparties.co/${imageUrl}`} alt={card.nameRU} />
            <div className="movies-card__saved-container">
                <button className="movies-card__savebtn" type="button" aria-label="Сохранить" name="save">Сохранить</button>
            </div>
        </li>
    )
}

export default MoviesCard;