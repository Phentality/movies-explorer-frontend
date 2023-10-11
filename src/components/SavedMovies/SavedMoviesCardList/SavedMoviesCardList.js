import React from 'react';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';
import cards from './temporary file'


function SavedMoviesCardList(props) {

    return (
        <section className='saved-movies-card-list'>
            <div className='saved-movies-card-list__grid'>
                {cards.map((card) => (
                    <SavedMoviesCard key={card.movieId} card={card} />
                ))}
            </div>
        </section>)
}

export default SavedMoviesCardList;