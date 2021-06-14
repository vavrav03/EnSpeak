import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";

function Sidebar() {
   return (
      <Drawer
         container={container}
         variant="temporary"
         anchor={theme.direction === "rtl" ? "right" : "left"}
         open={mobileOpen}
         onClose={handleDrawerToggle}
         classes={{
            paper: classes.drawerPaper,
         }}
         ModalProps={{
            keepMounted: true, // Better open performance on mobile.
         }}
      >
         <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
               {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                  <ListItem button key={text}>
                     <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                     </ListItemIcon>
                     <ListItemText primary={text} />
                  </ListItem>
               ))}
            </List>
            <Divider />
            <List>
               {["All mail", "Trash", "Spam"].map((text, index) => (
                  <ListItem button key={text}>
                     <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                     </ListItemIcon>
                     <ListItemText primary={text} />
                  </ListItem>
               ))}
            </List>
         </div>
      </Drawer>
   );
}
