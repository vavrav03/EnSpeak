import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from "./reducers";

export default function configureStore(history) {
   const middlewares = [routerMiddleware(history), thunk];
   return createStore(
      createRootReducer(history),
      composeWithDevTools(applyMiddleware(...middlewares))
   );
}
