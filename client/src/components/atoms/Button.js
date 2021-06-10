import React from "react";
import { Button } from "@material-ui/core";

function SignButton({ text }) {
   return (
      <Button
         fullWidth
         variant={"contained"}
         color={"primary"}
         className={"sign-button"}
         type="submit"
      >
         {text}
      </Button>
   );
}

function SignInButton() {
   return <SignButton text={"Sign in"} />;
}

function SignUpButton() {
   return <SignButton text={"Sign up"} />;
}

export default Button;
export { SignInButton, SignUpButton };
