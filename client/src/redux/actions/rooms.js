import { postRoom, getRooms } from "api/rooms";
import { responseError } from "./error";

export const SET_ROOMS = "SET_ROOMS";
export const ADD_ROOM = "ADD_ROOM"

const setRooms = (rooms) => {
   return {
      type: SET_ROOMS,
      rooms
   }
}

const addRoom = (room) => {
   return {
      type: ADD_ROOM,
      room
   }
}

export const attemptGetRooms = () => (dispatch) => {
   getRooms()
      .then((response) => {
         const { data } = response;
         dispatch(setRooms(data.rooms));
      })
      .catch((err) => {
         dispatch(responseError(err.response, err.response.data.message));
      });
};

export const attemptPostRoom = (meetingDate) => (dispatch) => {
   postRoom(meetingDate)
      .then((response) => {
         const { data } = response;
         dispatch(addRoom(data.room));
      })
      .catch((err) => {
         dispatch(responseError(err.response, err.response.data.message));
      });
};