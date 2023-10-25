import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useResize } from '../../../hooks/useResize';
import api from '../../../utils/MainApi'

function MoviesCardList(props) {
    const resize = useResize();

    const cards = props.movies;

    function saveCard(card) {
        api.addMovie(card.country,
            card.director,
            card.duration,
            card.year,
            card.description,
            `https://api.nomoreparties.co${card.image.url}`,
            card.trailerLink,
            `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
            card.id,
            card.nameRU,
            card.nameEN)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section className='movies-card-list'>
            <ul className='movies-card-list__grid'>
                {cards.map((card) => <MoviesCard key={card.id} card={card} onCardSave={saveCard} isSaved={props.isSaved} onCardClick={props.changeButton} />)}
            </ul>
            <button className='movies-card-list__more-button'>Ещё</button>
        </section>)
}

export default MoviesCardList;