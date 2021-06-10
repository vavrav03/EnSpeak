import React from "react";
import { ConnectedSignUpForm } from "components/organisms/SignForms/SignUpForm";

function SignUpPage() {
   return (
      <div className={"center-in-viewport"}>
         <ConnectedSignUpForm />
      </div>
   );
}

export default SignUpPage;
export { SignUpPage };
