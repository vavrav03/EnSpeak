import { Checkbox, FormControlLabel, Grid } from "@material-ui/core";
import { SignInButton, SignUpButton } from "components/atoms/Button";
import { PasswordFormInput, SignFormInput } from "components/atoms/Input";
import { Separator } from "components/atoms/Separator";
import { SignInFormFooter, SignUpFormFooter } from "components/molecules/SignFormFooter";
import {
   SignInFormHeadding,
   SignUpFormHeadding,
} from "components/molecules/SignFormHeadding";
import { SocialMedia } from "components/molecules/SocialMedia";
import React from "react";

import { Formik, Field, Form, FastField } from "formik";
import * as Yup from "yup";

function SignInForm() {
   return (
      <div className={"sign-form-container sign-in"}>
         <Formik
            initialValues={{
               email: "",
               password: "",
               rememberMe: false,
            }}
            onSubmit={(values, { setSubmitting }) => {
               setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
               }, 400);
            }}
         >
            <Form>
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
         <SignInFormFooter />
      </div>
   );
}

function SignUpForm() {
   return (
      <div className={"sign-form-container sign-up"}>
         <Formik
            initialValues={{
               firstName: "",
               lastName: "",
               email: "",
               password: "",
            }}
            validationSchema={Yup.object({
               firstName: Yup.string().required("Required"),
               lastName: Yup.string().required("Required"),
               email: Yup.string().email("Invalid email address").required("Required"),
               password: Yup.string()
                  .required("Required")
                  .matches(
                     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                  ),
            })}
            onSubmit={(values, { setSubmitting }) => {
               setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
               }, 400);
            }}
         >
            <Form>
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
                        <FastField name="firstName">
                           {({ field, form, meta }) => (
                              <SignFormInput
                                 label="First name"
                                 name="firstName"
                                 autoFocus
                                 inputProps={{ ...field }}
                                 error={meta.touched && typeof meta.error !== "undefined"}
                                 helperText={
                                    meta.touched && typeof meta.error !== "undefined"
                                       ? meta.error
                                       : ""
                                 }
                              />
                           )}
                        </FastField>
                     </Grid>
                     <Grid item xs={6}>
                        <FastField name="lastName">
                           {({ field, form, meta }) => (
                              <SignFormInput
                                 label="Last name"
                                 name="firstName"
                                 inputProps={{ ...field }}
                                 error={meta.touched && typeof meta.error !== "undefined"}
                                 helperText={
                                    meta.touched && typeof meta.error !== "undefined"
                                       ? meta.error
                                       : ""
                                 }
                              />
                           )}
                        </FastField>
                     </Grid>
                  </Grid>
                  <Grid item xs={12}>
                     <FastField name="email">
                        {({ field, form, meta }) => (
                           <SignFormInput
                              label="Email Address"
                              name="email"
                              type="email"
                              autoComplete="email"
                              inputProps={{ ...field }}
                              error={meta.touched && typeof meta.error !== "undefined"}
                              helperText={
                                 meta.touched && typeof meta.error !== "undefined"
                                    ? meta.error
                                    : ""
                              }
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
                              error={meta.touched && typeof meta.error !== "undefined"}
                              helperText={
                                 meta.touched && typeof meta.error !== "undefined"
                                    ? meta.error
                                    : ""
                              }
                           />
                        )}
                     </FastField>
                  </Grid>
                  <Grid item xs={12}>
                     <SignUpButton />
                  </Grid>
               </Grid>
            </Form>
         </Formik>
         <SignUpFormFooter />
      </div>
   );
}

export default SignInForm;
export { SignInForm, SignUpForm };
