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
import { getUser } from "redux/reducers/user";

function UserNavbarCard({
   fullName,
   role,
   status,
   profilePicture,
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
               <div className="user-name">{`${fullName}`}</div>
               <div className="user-role">{role}</div>
            </div>
            <UserAvatar imageUrl={profilePicture} status={status}></UserAvatar>
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

const mapStateToProps = (state) => {
   const user = getUser(state);
   return {
      fullName: user.full_name || `${user.first_name} ${user.last_name}`,
      profilePicture: user.profile_picture,
      status: user.status,
      role: user.role
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      attemptSetOnline: () => dispatch(attemptSetOnline()),
      attemptSetIdle: () => dispatch(attemptSetIdle()),
      attemptSetOffline: () => dispatch(attemptSetOffline()),
      showNotImplementedYet: () => dispatch(notImplementedYet()),
      attemptLogout: () => dispatch(attemptLogout()),
   };
};

const ConnectedUserNavbarCard = connect(mapStateToProps, mapDispatchToProps)(UserNavbarCard);

export default ConnectedUserNavbarCard;
export { UserNavbarCard, ConnectedUserNavbarCard };
