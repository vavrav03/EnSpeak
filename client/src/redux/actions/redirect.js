import { push } from "connected-react-router";

export const toLoginPage = () => {
   return push("/login");
};

export const toHomePage = () => {
   return push("/");
};
