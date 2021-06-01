import { TextField } from "@material-ui/core";
import React from "react";

function SignFormInput(props) {
   return (
      <TextField
         variant="outlined"
         fullWidth
         {...props}
      />
   );
}

export default TextField;
export {SignFormInput}