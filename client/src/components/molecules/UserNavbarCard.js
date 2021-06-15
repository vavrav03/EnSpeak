import React from "react";
import Typography from "@material-ui/core/Typography";
import UserAvatar from "components/atoms/UserIcon";
import Button from "components/atoms/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { attemptLogout } from "redux/actions/auth";
import { notImplementedYet } from "redux/actions/error";
import { attemptSetIdle, attemptSetOffline, attemptSetOnline } from "redux/actions/user";
import { connect } from "react-redux";

function UserNavbarCard({
   firstName,
   lastName,
   role,
   status,
   imageUrl,
   attemptLogout,
   showNotImplementedYet,
   attemptSetOnline,
   attemptSetOffline,
   attemptSetIdle,
}) {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };
   return (
      <div className="user-navbar-card">
         <Button onClick={handleClick}>
            <div className="user-info-container">
               <div className="user-name">{`${firstName} ${lastName}`}</div>
               <div className="user-role">{role}</div>
            </div>
            <UserAvatar imageUrl={imageUrl} status={status}></UserAvatar>
         </Button>
         <Menu
            className="user-card-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={handleClose}
         >
            <MenuItem onClick={attemptSetOnline}>
               <div className="list-item">
                  <div className="status-ball online-this"></div>
               </div>
               <Typography variant="inherit">Online</Typography>
            </MenuItem>
            <MenuItem onClick={attemptSetIdle}>
               <div className="list-item">
                  <div className="status-ball idle-this" fontSize="small"></div>
               </div>
               <Typography variant="inherit">Idle</Typography>
            </MenuItem>
            <MenuItem onClick={attemptSetOffline}>
               <div className="list-item">
                  <div className="status-ball offline-this" fontSize="small"></div>
               </div>
               <Typography variant="inherit">Offline</Typography>
            </MenuItem>
            <MenuItem onClick={showNotImplementedYet}>
               <div className="list-item">
                  <PersonOutlineIcon fontSize="small" />
               </div>
               <Typography variant="inherit">Your profile</Typography>
            </MenuItem>
            <MenuItem onClick={attemptLogout}>
               <div className="list-item">
                  <ExitToAppIcon fontSize="small" />
               </div>
               <Typography variant="inherit">Log out</Typography>
            </MenuItem>
         </Menu>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      attemptSetOnline: () => dispatch(attemptSetOnline()),
      attemptSetIdle: () => dispatch(attemptSetIdle()),
      attemptSetOffline: () => dispatch(attemptSetOffline()),
      showNotImplementedYet: () => dispatch(notImplementedYet()),
      attemptLogout: () => dispatch(attemptLogout()),
   };
};

const ConnectedUserNavbarCard = connect(null, mapDispatchToProps)(UserNavbarCard);

export default ConnectedUserNavbarCard;
export { UserNavbarCard, ConnectedUserNavbarCard };
