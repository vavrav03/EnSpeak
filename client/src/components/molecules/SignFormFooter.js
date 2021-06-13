import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { notImplementedYet } from "redux/actions/error";

function SignFormFooter({ children }) {
   return <div className={"sign-footer-container"}>{children}</div>;
}

function SignInFormFooter({showNotImplementedYet}) {
   return (
      <SignFormFooter>
         <Link onClick={e => {
            e.preventDefault();
            showNotImplementedYet();
         }} to="/forgot" >Forgot password?</Link>
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

const mapDispatchToProps = (dispatch) => {
   return {
      showNotImplementedYet: () => dispatch(notImplementedYet())
   }
}

const ConnectedSignInFormFooter = connect(null, mapDispatchToProps)(SignInFormFooter);

export default SignFormFooter;
export { ConnectedSignInFormFooter, SignInFormFooter, SignUpFormFooter };
