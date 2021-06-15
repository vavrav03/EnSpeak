import axios from "./client";

export const getUser = () => axios.get("/user");
export const patchSetOnline = () => axios.patch("/user", {
   status: "online"
});
export const patchSetIdle = () => axios.patch("/user", {
   status: "idle"
});
export const patchSetOffline = () => axios.patch("/user", {
   status: "offline"
});
