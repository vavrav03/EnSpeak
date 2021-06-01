import React from "react";
import { Link } from "react-router-dom";

function SignFormFooter({ children }) {
   return <div className={"sign-footer-container"}>{children}</div>;
}

function SignInFormFooter() {
   return (
      <SignFormFooter>
         <Link to="#" >Forgot password?</Link>
         <Link to="#">Sign up</Link>
      </SignFormFooter>
   );
}

function SignUpFormFooter() {
   return (
      <SignFormFooter>
         <Link to="#">Already have an account? Sign in!</Link>
      </SignFormFooter>
   );
}

export default SignFormFooter;
export { SignInFormFooter, SignUpFormFooter };
