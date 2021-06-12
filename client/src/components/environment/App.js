import React from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router";
import Notifications from "react-notification-system-redux";
import { HomePage } from "components/pages/HomePage";
import { SignInPage } from "components/pages/SignInPage";
import { SignUpPage } from "components/pages/SignUpPage";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import { getNotifications } from "redux/selectors";
import ProtectedRoute from "./ProtectedRoute";

const theme = createMuiTheme({
   typography: {
      fontFamily: ["Roboto", "Arial"],
   },
   palette: {
      primary: blue,
   },
});

function App({ history, store, notifications }) {
   return (
      <ThemeProvider theme={theme}>
         <Provider store={store}>
            <Notifications notifications={notifications} />
            <ConnectedRouter history={history}>
               <div>
                  <div className="main">
                     <Switch>
                        <Route exact path="/" component={HomePage} />
                        <ProtectedRoute path="/settings" component={HomePage} />
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

const mapStateToProps = (state) => {
   return {
      notifications: getNotifications(state),
   };
};

const ConnectedApp = connect(mapStateToProps, null)(App);

export default ConnectedApp;
export { App, ConnectedApp };
