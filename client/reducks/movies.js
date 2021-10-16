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