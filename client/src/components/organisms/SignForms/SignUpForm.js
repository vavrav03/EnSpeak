import { Grid } from "@material-ui/core";
import { SignUpButton } from "components/atoms/Button";
import { PasswordFormInput, SignFormInput } from "components/atoms/Input";
import { Separator } from "components/atoms/Separator";
import { SignUpFormFooter } from "components/molecules/SignFormFooter";
import { SignUpFormHeadding } from "components/molecules/SignFormHeadding";
import { ConnectedSocialMedia } from "components/molecules/SocialMedia";
import React from "react";

import { Formik, Form, FastField } from "formik";
import * as Yup from "yup";
import { attemptRegister } from "redux/actions/auth";
import { connect } from "react-redux";

function SignUpForm({ onSubmit }) {
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
            onSubmit={onSubmit}
         >
            <Form>
               <Grid container spacing={3}>
                  <Grid item xs={12}>
                     <SignUpFormHeadding />
                  </Grid>
                  <Grid item xs={12}>
                     <ConnectedSocialMedia />
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

const mapStateToProps = () => {
   return {};
};

const mapDispatchToProps = (dispatch) => {
   return {
      onSubmit: (data, { setSubmitting }) => {
         dispatch(attemptRegister(data));
      },
   };
};

const ConnectedSignUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

export default ConnectedSignUpForm;
export { SignUpForm, ConnectedSignUpForm };
