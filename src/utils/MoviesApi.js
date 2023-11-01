  class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    _chechRes = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialMovies() {
        return fetch(`${this._baseUrl}/`, {
            methods: 'GET',
        })
            .then(this._chechRes);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies'
});

export default moviesApi;