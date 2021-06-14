import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Navbar} from "components/organisms/Navbar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
   },
   drawer: {
      [theme.breakpoints.up("sm")]: {
         width: drawerWidth,
         flexShrink: 0,
      },
   },
   appBar: {
      [theme.breakpoints.up("sm")]: {
         width: `calc(100% - ${drawerWidth}px)`,
         marginLeft: drawerWidth,
      },
   },
   menuButton: {
      marginRight: theme.spacing(2),
      // [theme.breakpoints.up("sm")]: {
      //    display: "none",
      // },
   },
   // necessary for content to be below app bar
   toolbar: theme.mixins.toolbar,
   drawerPaper: {
      width: drawerWidth,
   },
   content: {
      flexGrow: 1,
   },
}));

function NormalPage(props) {
   const { window } = props;
   const classes = useStyles();
   const theme = useTheme();
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const container = window !== undefined ? () => window().document.body : undefined;

   return (
      <div className={classes.root}>
         <CssBaseline />
         {/* <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css"></Hidden>
            <Hidden xsDown implementation="css"></Hidden>
         </nav> */}
         <div className={classes.content}>
            <Navbar />
            <main>
               <div className={classes.toolbar} />
               <div>Content</div>
            </main>
         </div>
      </div>
   );
}

NormalPage.propTypes = {
   window: PropTypes.func,
};

export default NormalPage;
export { NormalPage };
