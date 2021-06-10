import { postRegister, postLogin, postLogout } from "api/auth";
import { push } from "connected-react-router";
import { dispatchError } from "./general";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const UPDATE_USER = "UPDATE_USER";

export const login = (user) => {
   return {
      type: LOGIN_USER,
      user,
   };
};

export const logout = () => {
   return {
      type: LOGOUT_USER,
   };
};

export const updateUser = (user) => {
   return {
      type: UPDATE_USER,
      user,
   };
};

export const attemptLogin = (user) => (dispatch) =>
   postLogin(user)
      .then((data) => {
         dispatch(login(data.user));
         dispatch(push("/home"));
         return data;
      })
      .catch(dispatchError(dispatch));

export const attemptRegister = (newUser) => (dispatch) =>
   postRegister(newUser)
      .then((data) => {
         return dispatch(attemptLogin(newUser));
      })
      .then(() => dispatch(push("/home")))
      .catch(dispatchError(dispatch));

export const attemptLogout = () => (dispatch) =>
   postLogout()
      .then((data) => {
         dispatch(logout());
         dispatch(push("/login"));
         return data;
      })
      .catch(dispatchError(dispatch));
