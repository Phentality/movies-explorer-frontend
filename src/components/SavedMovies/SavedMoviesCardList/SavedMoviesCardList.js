import React from 'react';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';


function SavedMoviesCardList(props) {

    const cards = props.movies;

    return (
        <section className='saved-movies-card-list'>
            <ul className='saved-movies-card-list__grid'>
                {cards.map((card) => (
                    <SavedMoviesCard key={card._id} card={card} onCardDelete={props.deleteCard} />
                ))}
            </ul>
        </section>)
}

export default SavedMoviesCardList;