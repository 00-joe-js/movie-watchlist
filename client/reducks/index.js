/*
    {
        movies: Array of Movie Objects (rows in database)
        selectableGenres: Array of Genre Objects (rows in database)
        randomMovie ("I'm feeling lucky"): A single Movie Object
    }

    Canonical source of changing information in our application.

    Dispatch an action to the store:
        store.dispatch({ type: SET_ALL_MOVIES, movies: moviesFromServer })

*/

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import moviesReducer from "./movies";
import genresReducer from "./genres";

const storeObject = createStore(combineReducers({
    movies: moviesReducer,
    selectableGenres: genresReducer,
    randomMovie: (state = null) => { // Initial state of movie object in I'm feeling lucky: nothing/null
        return state;
    }
}), applyMiddleware(thunkMiddleware));

export default storeObject;