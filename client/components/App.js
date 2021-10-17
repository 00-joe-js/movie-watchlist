import React from "react";

import { Switch, Route, Redirect, Link } from "react-router-dom";

import MovieList from "./MovieList";
import GenreForm from "./GenreForm";
import NewMovieForm from "./NewMovieForm";

class App extends React.Component {
    render() {
        return (
            <div>
                <Link id="logo" to="/"><h1>Movie List</h1></Link>
                <nav>
                    <Link to="/add-movie">Create a New Movie</Link>
                    <Link to="/add-genre">Create a New Genre</Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={MovieList} />
                    <Route path="/add-movie" component={NewMovieForm} />
                    <Route path="/add-genre" component={GenreForm} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default App;