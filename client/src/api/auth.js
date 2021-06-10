import axios from "./client";

export const postRegister = (user) => axios.post("/auth/register", user);

export const postLogin = (user) => axios.post("/auth/login", user);

export const postLogout = () => axios.post("/auth/logout");
