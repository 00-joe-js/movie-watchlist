import React from "react";

import MovieList from "./MovieList";

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
                <MovieList />
            </div>
        );
    }
}

export default App;