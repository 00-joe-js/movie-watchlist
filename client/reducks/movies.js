import axios from "axios";

export const SET_MOVIES = "SET_MOVIES";

// Action to use when we want to set the movies on the store.
export const setMoviesOnStore = (movies) => {
    return { type: SET_MOVIES, moviesArray: movies };
};

// Thunk action creator.
export const fetchMoviesFromServer = () => {
    return async (dispatch) => { // This function gets dispatched.
        const response = await axios.get("/movies");
        const movies = response.data;
        dispatch(setMoviesOnStore(movies));
    };
};

// Another thunk action creator.
export const createMovie = (newMovieInformation) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/movies", {
                title: newMovieInformation.title,
                link: newMovieInformation.link,
                genres: newMovieInformation.genres
            });
            const newMovieCreated = response.data;
            return newMovieCreated;
        } catch (e) {
            console.error(e);
        }
    };
};

export const watchMovie = (idOfNewWatchedMovie) => {

    return async (dispatch, getState) => {
        const response = await axios.put(`/movies/${idOfNewWatchedMovie}`, { watched: true });
        const updatedMovie = response.data;
        let updatedMovies = getState().movies.slice(0);
        updatedMovies = updatedMovies.map(eachMovie => {
            if (eachMovie.id !== idOfNewWatchedMovie) {
                return eachMovie;
            }
            return {
                ...eachMovie, watched: true
            };
        })
        dispatch(setMoviesOnStore(updatedMovies));
    };

};

export default (state = [], action) => { // Initial state of movies: [] (no movies known)
    console.log(action);
    if (action.type === SET_MOVIES) {
        return action.moviesArray;
    }
    return state;
};