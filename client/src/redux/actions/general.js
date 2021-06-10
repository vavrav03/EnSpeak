import { push } from "connected-react-router";
import { logout } from "./auth";

export const dispatchError = (dispatch) => (res) => {
   if (res.status === 401) {
      dispatch(logout());
      dispatch(push("/login"));
   }

   // RNC.addNotification({
   //    title: `Error: ${res.status}`,
   //    message: res.body.message,
   //    type: "danger",
   //    container: "top-right",
   //    animationIn: ["animated", "fadeInRight"],
   //    animationOut: ["animated", "fadeOutRight"],
   //    dismiss: {
   //       duration: 5000,
   //    },
   // });

   throw res;
};
