import React from "react";
import {Button, Typography} from '@material-ui/core';

function SignInButton({color, variant, fullWidth}) {
   return (
      <Button
         fullWidth
         variant={variant ? variant : "outlined"}
         color={color ? color : "primary"}
         className={"sign-button"}
      >
         <Typography variant="body1" className={classes.signButtonText}>
            Sign in
         </Typography>
      </Button>
   );
}

export default Button;
export 
