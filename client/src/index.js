import React from "react";
import ReactDOM from "react-dom";
import App from "components/environment/App";
import { store } from "redux/store";
import history from "./history";

import "assets/styles/index.scss";

ReactDOM.render(<App history={history} store={store} />, document.getElementById("root"));