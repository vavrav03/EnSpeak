import { LOGIN_USER, LOGOUT_USER } from "../actions/auth";
import { UPDATE_USER, SET_STATUS, START_LOADING_USER } from "../actions/user";

export default function user(user = {isLoading: true}, action) {
   switch (action.type) {
      case START_LOADING_USER:
         return { ...user, isLoading: true };
      case LOGIN_USER:
         return action.user;
      case LOGOUT_USER:
         return {};
      case UPDATE_USER:
         return action.user;
      case SET_STATUS:
         return { ...user, status: action.status };
      default:
         return user;
   }
}

export const getUser = (state) => {
   return state.user;
};

export const getUserEmail = (state) => {
   return state.user.email
};

export const isLoading = (state) => {
   return state.user.isLoading;
};

export const isLoadingForTheFirstTime = (state) => {
   console.log(state);
   return isLoading(state) && !state.user.email
}

export { user };
