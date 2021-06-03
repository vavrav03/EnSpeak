import React from "react";
import { SignInForm } from "components/organisms/SignForms";

function SignInPage() {
   return (
      <div className={"center-in-viewport"}>
         <SignInForm />
      </div>
   );
}

export default SignInPage;
export { SignInPage };
