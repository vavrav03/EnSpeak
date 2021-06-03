import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function SignFormInput(props) {
   return <TextField variant="outlined" fullWidth {...props} />;
}

function PasswordFormInput(props) {
   const [showPassword, setShowPassword] = useState(false);
   const handleShowPassword = () => setShowPassword(!showPassword);
   return (
      <TextField
         {...props}
         variant="outlined"
         fullWidth
         type={showPassword ? "text" : "password"}
         InputProps={{
            endAdornment: (
               <InputAdornment position="start">
                  <IconButton
                     aria-label="toggle password visibility"
                     onClick={handleShowPassword}
                  >
                     {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
               </InputAdornment>
            ),
         }}
      />
   );
}

export default TextField;
export { SignFormInput, PasswordFormInput };
