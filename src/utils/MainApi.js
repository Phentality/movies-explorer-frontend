class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    _chechRes = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            methods: 'GET',
            credentials: 'include',
        })
            .then(this._chechRes);
    }

    editUserInfo(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            body: JSON.stringify({
                name: name,
                email: email
            }),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(this._chechRes);
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            methods: 'GET',
            credentials: 'include',
        })
            .then(this._chechRes)
    }

    addMovie(country, director, duration, year, description, image, trailerLink, thumbnail, id, nameRU, nameEN) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                country: country,
                director: director,
                duration: duration,
                year: year,
                description: description,
                image: image,
                trailerLink: trailerLink,
                thumbnail: thumbnail,
                id: id,
                nameRU: nameRU,
                nameEN: nameEN,
            }),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then((res) => {
                return res;
            })
            .then(this._chechRes);
    }

    deleteMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            body: JSON.stringify({
                _id: id
            }),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(this._chechRes);
    }
}

const api = new Api({
    baseUrl: 'https://api.phental.nomoredomainsrocks.ru'
});

export default api;