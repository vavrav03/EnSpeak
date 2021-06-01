import React from "react";
import ReactDOM from "react-dom";
import App from "components/environment/App";

import history from "history.js";
import configureStore from "redux/configureStore";

import "assets/styles/index.scss";

ReactDOM.render(
   <App history={history} store={configureStore(history)} />,
   document.getElementById("root")
);
