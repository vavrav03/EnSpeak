import { Grid } from "@material-ui/core";
import { SignInButton, SignUpButton } from "components/atoms/Button";
import { SignFormInput } from "components/atoms/Input";
import { Separator } from "components/atoms/Separator";
import { SignInFormFooter, SignUpFormFooter } from "components/molecules/SignFormFooter";
import {
   SignInFormHeadding,
   SignUpFormHeadding,
} from "components/molecules/SignFormHeadding";
import { SocialMedia } from "components/molecules/SocialMedia";
import React from "react";

function SignInForm() {
   return (
      <div className={"sign-form-container sign-in"}>
         <form>
            <Grid container spacing={3}>
               <Grid item xs={12}>
                  <SignInFormHeadding />
               </Grid>
               <Grid item xs={12}>
                  <SocialMedia />
               </Grid>
               <Grid item xs={12}>
                  <Separator />
               </Grid>
               <Grid item xs={12}>
                  <SignFormInput
                     label="Email Address"
                     name="email"
                     type="email"
                     autoComplete="email"
                     autoFocus
                  />
               </Grid>
               <Grid item xs={12}>
                  <SignFormInput label="Password" name="password" type="password" />
               </Grid>
               <Grid item xs={12}>
                  <SignInButton />
               </Grid>
            </Grid>
         </form>
         <SignInFormFooter />
      </div>
   );
}

function SignUpForm() {
   return (
      <div className={"sign-form-container sign-up"}>
         <form>
            <Grid container spacing={3}>
               <Grid item xs={12}>
                  <SignUpFormHeadding />
               </Grid>
               <Grid item xs={12}>
                  <SocialMedia />
               </Grid>
               <Grid item xs={12}>
                  <Separator />
               </Grid>
               <Grid item container spacing={3}>
                  <Grid item xs={6}>
                     <SignFormInput label="First name" name="firstName" autoFocus />
                  </Grid>
                  <Grid item xs={6}>
                     <SignFormInput label="Last name" name="firstName" />
                  </Grid>
               </Grid>
               <Grid item xs={12}>
                  <SignFormInput
                     label="Email Address"
                     name="email"
                     type="email"
                     autoComplete="email"
                  />
               </Grid>
               <Grid item xs={12}>
                  <SignFormInput label="Password" name="password" type="password" />
               </Grid>
               <Grid item xs={12}>
                  <SignUpButton />
               </Grid>
            </Grid>
         </form>
         <SignUpFormFooter />
      </div>
   );
}

export default SignInForm;
export { SignInForm, SignUpForm };
