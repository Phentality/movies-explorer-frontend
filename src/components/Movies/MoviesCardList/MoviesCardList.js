import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import cards from './temporary file'


function MoviesCardList(props) {

    return (
        <section className='movies-card-list'>
            <ul className='movies-card-list__grid'>
                {cards.map((card) => (
                    <MoviesCard key={card.movieId} card={card} />
                ))}
            </ul>
            <button className='movies-card-list__more-button'>Ещё</button>
        </section>)
}

export default MoviesCardList;