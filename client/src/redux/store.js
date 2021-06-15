import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { createRootReducer } from "./reducers";
import history from "../history";
import thunk from "redux-thunk";

export const configureStore = (history) => {
   const functionMiddleware = [];

   const coreMiddleware = [routerMiddleware(history), thunk];

   return createStore(
      createRootReducer(history),
      composeWithDevTools({trace: true})(applyMiddleware(...functionMiddleware, ...coreMiddleware))
   );
};
export const store = configureStore(history);
export const dispatch = store.dispatch;;
export default store;