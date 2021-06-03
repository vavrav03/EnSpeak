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
import SignInForm from "components/organisms/SignInForm";

const theme = createMuiTheme({
   typography: {
      fontFamily: ["Roboto", "Arial"],
   },
   palette: {
      primary: blue,
   },
});

function App() {
   return (
      <ThemeProvider theme={theme}>
         <div className={"center-in-viewport"}>
            <SignInForm />
         </div>
      </ThemeProvider>
   );
}

export default App;
