import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Grid from "@material-ui/core/Grid";

import { UserAvatar } from "components/atoms/UserIcon";
import UserNavbarCard from "components/molecules/UserNavbarCard";

function Navbar() {
   return (
      <div className="ffasfasdf">
         <AppBar position="static">
            <Toolbar>
               <Grid container justify="space-between">
                  <div className={"center-children"}>
                     <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                     >
                        <MenuIcon />
                     </IconButton>
                     <Typography variant="h6">
                        Material-UI
                     </Typography>
                  </div>
                  
                  <div className={"center-children children-margin-left-10"}>
                     <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                           <NotificationsIcon />
                        </Badge>
                     </IconButton>
                     <UserNavbarCard firstName={"Vladimír"} lastName={"Vávra"} role={"admin"} imageUrl={"https://picsum.photos/200"} status={"online"}/>
                  </div>
               </Grid>
            </Toolbar>
         </AppBar>
      </div>
   );
}

export default Navbar
export { Navbar };
