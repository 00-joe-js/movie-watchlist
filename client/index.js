import React from "react";
import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import movieWatchlistReducksStore from "./reducks";


import App from "./components/App";
ReactDOM.render(
    <Provider store={movieWatchlistReducksStore}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.querySelector("#hey-react-put-your-app-here")
);