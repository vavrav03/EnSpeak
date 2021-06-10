import { createStore, applyMiddleware, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import history from "../history";
import thunk from 'redux-thunk'

export default function configureStore(history) {
   const rootReducer = combineReducers({
      router: connectRouter(history),
   });

   const functionMiddleware = [];

   const coreMiddleware = [routerMiddleware(history), thunk];

   return createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(...functionMiddleware, ...coreMiddleware))
   );
}
export const store = configureStore(history);
export const dispatch = store.dispatch;
