import React from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function MoviesCard(props) {
    const movie = props.card;
    function handleSaveClick(e) {
        e.preventDefault();
        props.onCardSave(movie);
        props.onCardClick(props.card.id);
    }

    const currentUser = React.useContext(CurrentUserContext);
    /*const isSaved = card.likes.some(i => i === currentUser._id);
    const cardSaveButtonClassName = (
        `${isSaved ? 'movies-card__savebtn_active' : 'movies-card__savebtn'}`
    );*/
    const imageUrl = props.card.image.url;
    const minutes = props.card.duration % 60;
    const hours = (props.card.duration - minutes) / 60;
    const duration = (hours < 10 ? "0" : "") + hours.toString() + "ч " + (minutes < 10 ? "0" : "") + minutes.toString() + "м";
    const cardSaveButtonClassName = (
        `${props.isSaved ? 'movies-card__savebtn_active' : 'movies-card__savebtn'}`
      );

    return (
        <li className="movies-card">
            <div className="movies-card__title-container">
                <h2 className='movies-card__title'>{props.card.nameRU}</h2>
                <h3 className='movies-card__duration'>{duration}</h3>
            </div>
            <img className="movies-card__image" src={`https://api.nomoreparties.co/${imageUrl}`} alt={props.card.nameRU} />
            <div className="movies-card__saved-container">
                <button className={cardSaveButtonClassName}
                    type="click"
                    aria-label="Сохранить"
                    name="save"
                    onClick={handleSaveClick}>Сохранить</button>
            </div>
        </li>
    )
}

export default MoviesCard;