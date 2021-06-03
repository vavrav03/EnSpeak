import { SignInButton } from "components/atoms/Button";
import { SignFormInput } from "components/atoms/Input";
import { Separator } from "components/atoms/Separator";
import { SignInFormFooter } from "components/molecules/SignFormFooter";
import { SignFormHeadding } from "components/molecules/SignFormHeadding";
import { SocialMedia } from "components/molecules/SocialMedia";
import React from "react";

function SignInForm() {
   return (
      <div className={"sign-form-container signin"}>
         <form>
            <SignFormHeadding />
            <SocialMedia />
            <Separator />
            <SignFormInput
               label="Email Address"
               name="email"
               type="email"
               autoComplete="email"
               autoFocus
            />
            <SignFormInput
               label="Password"
               name="password"
               type="password"
            />
            <SignInButton />
         </form>
         <SignInFormFooter />
      </div>
   );
}

export default SignInForm;
export { SignInForm };
