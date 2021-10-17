import React from "react";

import MovieList from "./MovieList";
import GenreForm from "./GenreForm";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Movie List</h1>
                <nav>
                    <a>Only Unwatched</a>
                    <a>I'm Feeling Lucky</a>
                    <a>Add to Watchlist</a>
                </nav>
                {/* <MovieList /> */}
                <GenreForm />
            </div>
        );
    }
}

export default App;