// import React from "react";
// import { Formik, Field, Form } from "formik";
// import * as Yup from "yup";
// import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Avatar from "@material-ui/core/Avatar";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
// import { Link as RouterLink } from "react-router-dom";

// const initialValues = Object.freeze({
//    email: "",
//    password: "",
//    rememberMe: false
// });

// const validationSchema = Yup.object({
//    email: Yup.string().email("Invalid email address").required("Required"),
//    password: Yup.string().required("No password provided."),
// });

// const onSubmit = (values, { setSubmitting }) => {
//    setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//    }, 400);
// }

// export default function SignIn() {
//    return (
//       <Container>
//          <CssBaseline />
//          <div>
//             <Avatar>
//                <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//                Sign in
//             </Typography>
//             <Formik
//                initialValues={initialValues}
//                validationSchema={validationSchema}
//                onSubmit={onSubmit}
//             >
//                <Form>
//                   <Field name="email">
//                      {({ field, form, meta }) => (
//                         <TextField
//                            variant="outlined"
//                            margin="normal"
//                            required
//                            fullWidth
//                            id="email"
//                            label="Email Address"
//                            name="email"
//                            autoComplete="email"
//                            autoFocus
//                            inputProps={{ ...field }}
//                            error={meta.touched && typeof meta.error !== "undefined"}
//                         />
//                      )}
//                   </Field>
//                   <Field name="password" type="password">
//                      {({ field, form, meta }) => (
//                         <TextField
//                            variant="outlined"
//                            margin="normal"
//                            required
//                            fullWidth
//                            name="password"
//                            label="Password"
//                            type="password"
//                            id="password"
//                            autoComplete="current-password"
//                            inputProps={{ ...field }}
//                            error={meta.touched && typeof meta.error !== "undefined"}
//                         />
//                      )}
//                   </Field>
//                   <Field name="rememberUser" type="checkbox">
//                      {({ field }) => (
//                         <FormControlLabel
//                            control={
//                               <Checkbox
//                                  value="rememberUser"
//                                  color="primary"
//                                  inputProps={{ ...field }}
//                                  checked={field.value}
//                               />
//                            }
//                            label="Remember me"
//                         />
//                      )}
//                   </Field>
//                   <Button type="submit" fullWidth variant="contained" color="primary">
//                      Sign In
//                   </Button>
//                   <Grid container>
//                      <Grid item xs>
//                         <Link href="#" variant="body2">
//                            Forgot password?
//                         </Link>
//                      </Grid>
//                      <Grid item>
//                         <Link component={RouterLink} to="/signup">
//                            Sign Up
//                         </Link>
//                      </Grid>
//                   </Grid>
//                </Form>
//             </Formik>
//          </div>
//       </Container>
//    );
// }

import React from "react";
import Button from "@material-ui/core/Button";
import {
   createMuiTheme,
   TextField,
   ThemeProvider,
   Link,
   Typography,
   makeStyles,
} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import {
   FacebookSocialIcon,
   GoogleSocialIcon,
   LinkedInSocialIcon,
   LockSocialIcon,
   TwitterSocialIcon,
} from "components/atoms/SocialIcon";
import Separator from "components/atoms/Separator";

const theme = createMuiTheme({
   typography: {
      fontFamily: ["Roboto", "Arial"],
   },
   palette: {
      primary: blue,
   },
});

const useStyles = makeStyles({
   pageContainer: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      maxWidth: "400px",
      zIndex: "20",
   },
   formContainer: {
      padding: "25px 30px 30px 30px",
      display: "grid",
      textAlign: "center",
      gridRowGap: "25px",
      boxShadow: "0 0 2px 2px #d4d4d4",
      borderRadius: "4px",
      marginBottom: "30px",
      backgroundColor: "white",
   },
   functionsContainer: {
      display: "flex",
      justifyContent: "space-between",
   },
   signButton: {
      height: "50px",
   },
   signButtonText: {
      textTransform: "none",
      fontWeight: "600",
   },
   socialMedia: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      fontSize: "2rem",
   },
   socialIcon: {
      height: "46px",
      width: "46px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 0.45rem",
      // color: "#333",
      borderRadius: " 50%",
      border: "1px solid",
      textDecoration: "none",
      fontSize: "1.1rem",
      transition: "0.3s",
      "&:hover": {
         filter: " brightness(45%)",
      },
   },
   facebookIcon: {
      color: "#4267B2",
      borderColor: "#4267B2",
   },
   googleIcon: {
      color: "#de5246",
      borderColor: "#de5246",
   },
   twitterIcon: {
      color: "#00acee",
      borderColor: "#00acee",
   },
   linkedInIcon: {
      color: "#0e76a8",
      borderColor: "#0e76a8",
   },
   headding: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "& .lock-icon": {
         marginBottom: "5px",
      },
   },
   passwordIcon: {
      height: "46px",
      width: "46px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      fontSize: "1.1rem",
      transition: "0.3s",
      backgroundColor: "#2196f3",
      color: "white",
   },
});

const googleButtonStyles = {
   width: "100%",
   height: "50px",
};

function App() {
   const classes = useStyles();
   return (
      <ThemeProvider theme={theme}>
         <div
            style={{
               position: "fixed",
               height: "100vh",
               width: "100vw",
               zIndex: "1",
            }}
         ></div>
         <div className={classes.pageContainer}>
            <div className={classes.container}>
               <div className={classes.formContainer}>
                  <div className={classes.headding}>
                     <LockSocialIcon />
                     <Typography variant="h5">Welcome back!</Typography>
                  </div>

                  <div className={classes.socialMedia}>
                     <FacebookSocialIcon />
                     <TwitterSocialIcon />
                     <GoogleSocialIcon />
                     <LinkedInSocialIcon />
                  </div>
                  <Separator />
                  <TextField
                     variant="outlined"
                     fullWidth
                     label="Email Address"
                     name="email"
                     type="email"
                     autoComplete="email"
                     autoFocus
                  />
                  <TextField
                     variant="outlined"
                     fullWidth
                     label="Password"
                     name="password"
                     type="password"
                  />
                  <Button
                     fullWidth
                     variant="contained"
                     color="primary"
                     className={classes.signButton}
                  >
                     <Typography variant="body1" className={classes.signButtonText}>
                        Sign in
                     </Typography>
                  </Button>
               </div>
               <div className={classes.functionsContainer}>
                  <Link variant="body1" href="#">
                     Forgot password?
                  </Link>
                  <Link variant="body1" href="#">
                     Sign up
                  </Link>
               </div>
            </div>
         </div>
      </ThemeProvider>
   );
}

export default App;
