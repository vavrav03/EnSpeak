import React from "react";
import { Link } from "react-router-dom";

function SignFormFooter({ children }) {
   return <div className={"sign-footer-container"}>{children}</div>;
}

function SignInFormFooter() {
   return (
      <SignFormFooter>
         <Link to="/forgot" >Forgot password?</Link>
         <Link to="/register">Sign up</Link>
      </SignFormFooter>
   );
}

function SignUpFormFooter() {
   return (
      <SignFormFooter>
         <span></span>
         <Link to="/login">Already have an account? Sign in!</Link>
      </SignFormFooter>
   );
}

export default SignFormFooter;
export { SignInFormFooter, SignUpFormFooter };
