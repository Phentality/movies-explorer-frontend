import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

    const cards = props.movies
    return (
        <section className='movies-card-list'>
            <ul className='movies-card-list__grid'>
                {cards.map((card) => (
                    <MoviesCard key={card.id} card={card} />
                ))}
            </ul>
            <button className='movies-card-list__more-button'>Ещё</button>
        </section>)
}

export default MoviesCardList;