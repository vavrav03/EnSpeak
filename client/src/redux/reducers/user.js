// import update from "immutability-helper";
import { LOGIN_USER, LOGOUT_USER, UPDATE_USER } from "../actions/auth";
import _ from "lodash";

export default function user(state = {}, action) {
   switch (action.type) {
      case LOGIN_USER:
         return action.user;
      case LOGOUT_USER:
         return {};
      case UPDATE_USER:
         break;
      default:
         return state;
   }
}

export const getUser = (state) => {
   return state.user;
};

export const isLoggedIn = (state) => {
   return user && !_.isEmpty(state.user);
};

export { user };
