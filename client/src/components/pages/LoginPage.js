import React from "react";
import {
   createMuiTheme,
   TextField,
   ThemeProvider,
   Link,
   makeStyles,
} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import Separator from "components/atoms/Separator";
import SocialMedia from "components/molecules/SocialMedia";
import SignFormHeadding from "components/molecules/SignFormHeadding";
import { SignInButton } from "components/atoms/Button";
import { SignInFormFooter } from "components/molecules/SignFormFooter";
import { SignFormInput } from "components/atoms/Input";

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
});

const googleButtonStyles = {
   width: "100%",
   height: "50px",
};

function App() {
   const classes = useStyles();
   return (
      <ThemeProvider theme={theme}>
         <div className={classes.pageContainer}>
            <div className={classes.container}>
               <div className={classes.formContainer}>
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
                     variant="outlined"
                     fullWidth
                     label="Password"
                     name="password"
                     type="password"
                  />
                  <SignInButton />
               </div>
               <SignInFormFooter />
            </div>
         </div>
      </ThemeProvider>
   );
}

export default App;
