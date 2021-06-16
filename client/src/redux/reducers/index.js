import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import { user } from "./user";
import {rooms} from './rooms';

export const createRootReducer = (history) => combineReducers({
   router: connectRouter(history),
   notifications: notifications,
   user: user,
   rooms: rooms
});

export default createRootReducer;
