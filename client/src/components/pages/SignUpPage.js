import React from "react";
import { SignUpForm } from "components/organisms/SignForms";

function SignUpPage() {
   return (
      <div className={"center-in-viewport"}>
         <SignUpForm />
      </div>
   );
}

export default SignUpPage;
export { SignUpPage };
