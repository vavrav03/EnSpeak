import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";

function UserAvatar({imageUrl, status}) {
   return (
      <div >
         <Badge
            overlap="circle"
            anchorOrigin={{
               vertical: "bottom",
               horizontal: "right",
            }}
            className={`user-status-container ${status}`}
            variant="dot"
         >
            <Avatar alt="Remy Sharp" src={imageUrl} />
         </Badge>
      </div>
   );
}

export default UserAvatar;
export { UserAvatar };
