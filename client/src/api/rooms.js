import axios from "./client";

export const getRooms = () => axios.get("/rooms");

export const getOwnRooms = () => axios.get("/rooms/own")

export const postRoom = (meeting_time) => axios.post("/rooms", {meeting_time});