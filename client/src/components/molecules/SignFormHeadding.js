import { Typography } from "@material-ui/core";
import { LockSocialIcon } from "components/atoms/SocialIcon";
import { PropTypes } from "prop-types";

import React from "react";

function SignFormHeadding({ text }) {
   return (
      <div className={"sign-form-headding"}>
         <LockSocialIcon />
         <Typography variant="h5">{text}</Typography>
      </div>
   );
}

function SignInFormHeadding({ text }) {
   return (
      <SignFormHeadding text={"Welcome back!"} />
   );
}

function SignUpFormHeadding({ text }) {
   return (
      <SignFormHeadding text={"Create an account"} />
   );
}

SignFormHeadding.propTypes = {
   text: PropTypes.string.isRequired,
};

export default SignFormHeadding;
export { SignFormHeadding, SignInFormHeadding, SignUpFormHeadding };
