import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import movieWatchlistReducksStore from "./reducks";


import App from "./components/App";
ReactDOM.render(
    <Provider store={movieWatchlistReducksStore}><App /></Provider>,
    document.querySelector("#hey-react-put-your-app-here")
);