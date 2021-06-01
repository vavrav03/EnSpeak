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
import Separator from "components/atoms/Separator";
import SocialMedia from "components/molecules/SocialMedia";
import SignFormHeadding from "components/molecules/SignFormHeadding";

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
                  <SignFormHeadding />
                  <SocialMedia />
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
