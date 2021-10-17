import React from "react";

import { connect } from "react-redux";
import { createNewGenreOnServer, fetchGenresFromServer } from "../reducks/genres";

class GenreForm extends React.Component {
    constructor() {
        super();
        this.state = {
            typedIntoGenreInput: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.goGetAllGenres();
    }
    handleInputChange(event) {
        const inputElement = event.target;
        this.setState({ typedIntoGenreInput: inputElement.value });
    }
    handleSubmit(submitEvent) {
        submitEvent.preventDefault();
        const genreName = this.state.typedIntoGenreInput;
        this.props.makeANewGenre(genreName);
        this.setState({ typedIntoGenreInput: "" });
    }
    render() {
        return (
            <div>
                <h3>Add a new genre</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input onChange={this.handleInputChange} type="text" value={this.state.typedIntoGenreInput} />
                    </div>
                    <button type="submit">Add New Genre</button>
                </form>
                <div>
                    <h4>Current Genres:</h4>
                    <ul>
                        {this.props.existingGenres.map(eachGenre => {
                            return <li key={eachGenre.id}>{eachGenre.name}</li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (fullReduxState) => {
    return {
        existingGenres: fullReduxState.selectableGenres
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goGetAllGenres: () => {
            const thunk = fetchGenresFromServer();
            dispatch(thunk);
        },
        makeANewGenre: (nameOfNewGenre) => {
            const thunk = createNewGenreOnServer(nameOfNewGenre);
            dispatch(thunk);
        }
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(GenreForm);