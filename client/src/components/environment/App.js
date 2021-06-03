import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router";
import ReactNotification from "react-notifications-component";
import { HomePage } from "components/pages/HomePage";
import { SignInPage } from "components/pages/SignInPage";
import { SignUpPage } from "components/pages/SignUpPage";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
   typography: {
      fontFamily: ["Roboto", "Arial"],
   },
   palette: {
      primary: blue,
   },
});

function App({ history, store }) {
   return (
      <ThemeProvider theme={theme}>
         <Provider store={store}>
            <ConnectedRouter history={history}>
               <div>
                  <ReactNotification />
                  <div className="main">
                     <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/login" component={SignInPage} />
                        <Route path="/register" component={SignUpPage} />
                     </Switch>
                  </div>
               </div>
            </ConnectedRouter>
         </Provider>
      </ThemeProvider>
   );
}

App.propTypes = {
   store: PropTypes.object.isRequired,
   history: PropTypes.object.isRequired,
};

export default App;
export { App };
