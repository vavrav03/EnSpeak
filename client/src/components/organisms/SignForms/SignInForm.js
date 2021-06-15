import { Checkbox, FormControlLabel, Grid } from "@material-ui/core";
import { SignInButton } from "components/atoms/Button";
import { PasswordFormInput, SignFormInput } from "components/atoms/Input";
import { Separator } from "components/atoms/Separator";
import { ConnectedSignInFormFooter } from "components/molecules/SignFormFooter";
import { SignInFormHeadding } from "components/molecules/SignFormHeadding";
import { ConnectedSocialMedia } from "components/molecules/SocialMedia";
import React from "react";

import { Formik, Form, FastField } from "formik";
import { attemptLogin } from "redux/actions/auth";
import { connect } from "react-redux";

function SignInForm({ onSubmit }) {
   return (
      <div className={"sign-form-container sign-in"}>
         <Formik
            initialValues={{
               email: "",
               password: "",
               rememberMe: false,
            }}
            onSubmit={onSubmit}
         >
            <Form>
               <Grid container spacing={3}>
                  <Grid item xs={12}>
                     <SignInFormHeadding />
                  </Grid>
                  <Grid item xs={12}>
                     <ConnectedSocialMedia />
                  </Grid>
                  <Grid item xs={12}>
                     <Separator />
                  </Grid>
                  <Grid item xs={12}>
                     <FastField name="email">
                        {({ field, form, meta }) => (
                           <SignFormInput
                              label="Email Address"
                              name="email"
                              type="email"
                              autoComplete="email"
                              autoFocus
                              inputProps={{ ...field }}
                           />
                        )}
                     </FastField>
                  </Grid>
                  <Grid item xs={12}>
                     <FastField name="password">
                        {({ field, form, meta }) => (
                           <PasswordFormInput
                              label="Password"
                              name="password"
                              inputProps={{ ...field }}
                           />
                        )}
                     </FastField>
                  </Grid>
                  <Grid item xs={12} className={"remember-me-container"}>
                     <FastField name="rememberMe">
                        {({ field, form, meta }) => (
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    value="rememberMe"
                                    color="primary"
                                    inputProps={{ ...field }}
                                    checked={field.value}
                                 />
                              }
                              label="Remember me"
                           />
                        )}
                     </FastField>
                  </Grid>
                  <Grid item xs={12}>
                     <SignInButton />
                  </Grid>
               </Grid>
            </Form>
         </Formik>
         <ConnectedSignInFormFooter />
      </div>
   );
}

const mapStateToProps = () => {
   return {};
};

const mapDispatchToProps = (dispatch) => {
   return {
      onSubmit: (formData, { setSubmitting }) => {
         dispatch(attemptLogin(formData));
      },
   };
};

const ConnectedSignInForm = connect(mapStateToProps, mapDispatchToProps)(SignInForm);

export default ConnectedSignInForm;
export { SignInForm, ConnectedSignInForm };
