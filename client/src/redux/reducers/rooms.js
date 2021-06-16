
import {SET_ROOMS, ADD_ROOM} from 'redux/actions/rooms';

export default function rooms(rooms = [], action) {
   switch (action.type) {
      case SET_ROOMS:
         return action.rooms;
      case ADD_ROOM: 
         return [...rooms, action.room];
      default:
         return rooms;
   }
}

export const getRooms = (state) => {
   return state.rooms;
};

export const getRoomsOfUser = (state) => {
   return state.rooms.filter(room => {
      if(room.owner.email === state.user.email){
         return room;
      }
   })
};

export const getRoomsOfOthers = (state) => {
   return state.rooms.filter(room => {
      if(room.owner.email !== state.user.email){
         return room;
      }
   })
};

export { rooms };
