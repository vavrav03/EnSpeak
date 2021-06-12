import { error } from "react-notification-system-redux";

export const createErrorNotification = (
   title = "",
   message = "",
   position = "tr",
   autoDismiss = 2
) => {
   return error({
      title: title,
      message: message,
      position: position,
      autoDismiss: autoDismiss,
   });
};

export const createSuccessNotification = (title = "", message = "") => {};
