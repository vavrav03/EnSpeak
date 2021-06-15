import { getUser, patchSetIdle, patchSetOffline, patchSetOnline } from "api/user";
import { responseError } from "./error";

export const UPDATE_USER = "UPDATE_USER";
export const SET_STATUS = "SET_STATUS";
export const START_LOADING_USER = "START_LOADING_USER";
export const STOP_LOADING_USER = "STOP_LOADING_USER";

export const updateUser = (user) => {
   return {
      type: UPDATE_USER,
      user,
   };
};

export const startLoading = () => {
   return {
      type: START_LOADING_USER,
   };
};

export const attemptUpdateUser = () => (dispatch) => {
   dispatch(startLoading());
   getUser()
      .then((response) => {
         const { data } = response;
         
         dispatch(updateUser(data.user));
      })
      .catch((err) => {
         dispatch(responseError(err.response, err.response.data.message));
      });
};

export const attemptSetOnline = () => (dispatch) => {
   patchSetOnline()
      .then((response) => {
         dispatch(updateUser(response.data.user));
      })
      .catch((err) => dispatch(responseError(err.response, err.response.data.message)));
};
export const attemptSetIdle = () => (dispatch) => {
   patchSetIdle()
      .then((response) => {
         console.log(response)
         dispatch(updateUser(response.data.user));
      })
      .catch((err) => dispatch(responseError(err.response, err.response.data.message)));
};
export const attemptSetOffline = () => (dispatch) => {
   patchSetOffline()
      .then((response) => {
         dispatch(updateUser(response.data.user));
      })
      .catch((err) => dispatch(responseError(err.response, err.response.data.message)));
};
