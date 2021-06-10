import React from "react";
import { ConnectedSignInForm } from "components/organisms/SignForms/SignInForm";

function SignInPage() {
   return (
      <div className={"center-in-viewport"}>
         <ConnectedSignInForm />
      </div>
   );
}

export default SignInPage;
export { SignInPage };
