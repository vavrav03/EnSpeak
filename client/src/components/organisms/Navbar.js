import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Grid from "@material-ui/core/Grid";

import UserNavbarCard from "components/molecules/UserNavbarCard";

function Navbar({ isSidebarOpen, menuButtonAction }) {
   return (
      <AppBar position="static" className="navbar">
         <Toolbar>
            <Grid container justify="space-between">
               <div className={"center-children"}>
                  {!isSidebarOpen ? (
                     <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={menuButtonAction}
                     >
                        <MenuIcon />
                     </IconButton>
                  ) : null}
               </div>

               <div className={"center-children children-margin-left-10"}>
                  <IconButton aria-label="show 17 new notifications" color="inherit">
                     <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                     </Badge>
                  </IconButton>
                  <UserNavbarCard
                     firstName={"Vladimír"}
                     lastName={"Vávra"}
                     role={"admin"}
                     imageUrl={"https://picsum.photos/200"}
                     status={"online"}
                  />
               </div>
            </Grid>
         </Toolbar>
      </AppBar>
   );
}

export default Navbar;
export { Navbar };
