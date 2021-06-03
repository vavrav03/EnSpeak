import { Typography } from "@material-ui/core";
import { LockSocialIcon } from "components/atoms/SocialIcon";
import React from "react";

function SignFormHeadding() {
   return (
      <div className={"sign-form-headding"}>
         <LockSocialIcon />
         <Typography variant="h5">Welcome back!</Typography>
      </div>
   );
}

export default SignFormHeadding;
export { SignFormHeadding };
