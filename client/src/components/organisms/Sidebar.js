import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ForumIcon from "@material-ui/icons/Forum";
import ListSubheader from "@material-ui/core/ListSubheader";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import EventIcon from "@material-ui/icons/Event";
import ListIcon from "@material-ui/icons/List";
import { connect } from "react-redux";
import { notImplementedYet } from "redux/actions/error";
import { attemptLogout } from "redux/actions/auth";
import { Link } from "react-router-dom";

function Sidebar({ open, closeSidebar, showNotImplementedYet, attemptLogout }) {
   return (
      <Drawer variant="persistent" anchor="left" open={open}>
         <div className={"sidebar"}>
            <header className="sidebar-header">
               <Typography variant="h6">EnSpeak</Typography>
               <IconButton onClick={closeSidebar}>
                  <ChevronLeftIcon />
               </IconButton>
            </header>
            <Divider />
            <List>
               <ListSubheader>MEETINGS</ListSubheader>
               <ListItem
                  component={Link}
                  to="/offers"
                  button
                  key={"Meeting offers"}
               >
                  <ListItemIcon className="sidebar-list-item">
                     <ListIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Offers"} />
               </ListItem>
               <ListItem
                  component={Link}
                  to="/rooms"
                  button
                  key={"My rooms"}
                  to="/rooms"
               >
                  <ListItemIcon className="sidebar-list-item">
                     <EventIcon />
                  </ListItemIcon>
                  <ListItemText primary={"My rooms"} />
               </ListItem>
               {/* <ListItem
                  onClick={showNotImplementedYet}
                  button
                  key={"Meeting reservations"}
               >
                  <ListItemIcon className="sidebar-list-item">
                     <EventIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Reservations"} />
               </ListItem> */}
               <ListItem
                  onClick={showNotImplementedYet}
                  button
                  key={"A lot of other things"}
               >
                  <ListItemIcon className="sidebar-list-item">
                     <ForumIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Other things"} />
               </ListItem>
            </List>
            <Divider />
            <List>
               <ListSubheader>PROFILE</ListSubheader>
               <ListItem onClick={showNotImplementedYet} button key={"Profile settings"}>
                  <ListItemIcon className="sidebar-list-item">
                     <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Settings"} />
               </ListItem>
               <ListItem onClick={attemptLogout} button key={"Meeting reservations"}>
                  <ListItemIcon className="sidebar-list-item">
                     <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Log out"} />
               </ListItem>
            </List>
         </div>
      </Drawer>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      showNotImplementedYet: () => dispatch(notImplementedYet()),
      attemptLogout: () => dispatch(attemptLogout()),
   };
};

const ConnectedSidebar = connect(null, mapDispatchToProps)(Sidebar);

export default ConnectedSidebar;
export { Sidebar, ConnectedSidebar };
