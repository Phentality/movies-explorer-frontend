import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useResize } from '../../../hooks/useResize';

function MoviesCardList(props) {
    const cards = props.movies;
    const resize = useResize();
    const [allMovies, setAllMovies] = React.useState(false);
    const [count, setCount] = React.useState('');
    let showCards = cards.slice(0, count);

    React.useEffect(() => {
        if (resize.isScreenLg) {
            setCount(12);
        }
        if (!resize.isScreenLg && resize.isScreenMd) {
            setCount(8);
        }
        if (!resize.isScreenMd && resize.isScreenSm) {
            setCount(5);
        }
    }, [resize.isScreenLg, resize.isScreenMd, resize.isScreenSm, cards, resize.width])

    if (showCards === cards) {
        setAllMovies(true);
    }

    React.useEffect(() => {
        if (showCards.length === cards.length || cards.length === 0) {
            setAllMovies(true);
        }
        else {
            setAllMovies(false);
        }
    }, [count, cards, showCards.length])

    let countAdd;
    async function addItem() {
        if (resize.isScreenLg) {
            countAdd = 3
        }
        if (!resize.isScreenLg && resize.isScreenMd) {
            countAdd = 2
        }
        if (!resize.isScreenMd && resize.isScreenSm) {
            countAdd = 2
        }
        setCount(count + countAdd);
    }

    return (
        <section className='movies-card-list'>
            {props.ifError && <span id="movies-card-list-error" className="movies-card-list__error">{props.ifError}</span>}
            {props.empty && <span id="movies-card-list-error" className="movies-card-list__error">Ничего не найдено</span>}
            <ul className='movies-card-list__grid'>
                {showCards.map((card) => <MoviesCard key={card.id} card={card} onCardSave={props.saveCard} onDeleteCard={props.deleteCard} savedCards={props.savedCards} onCardClick={props.changeButton} />)}
            </ul>
            {!allMovies && <button className='movies-card-list__more-button'
                type="click"
                aria-label="Сохранить"
                name="save"
                onClick={addItem}>Ещё</button>}
        </section>)
}

export default MoviesCardList;