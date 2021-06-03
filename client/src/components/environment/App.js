import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router";
import ReactNotification from "react-notifications-component";
import HomePage from "components/pages/HomePage";
import SignInPage from "components/pages/SignInPage";

function App({ history, store }) {
   return (
      <Provider store={store}>
         <ConnectedRouter history={history}>
            <div>
               <ReactNotification />
               <div className="main">
                  <Switch>
                     <Route exact path="/" component={HomePage} />
                     <Route path="/login" component={SignInPage} />
                  </Switch>
               </div>
            </div>
         </ConnectedRouter>
      </Provider>
   );
}

App.propTypes = {
   store: PropTypes.object.isRequired,
   history: PropTypes.object.isRequired,
};

export default App;
export { App };
