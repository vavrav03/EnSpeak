import UserAvatar from "components/atoms/UserIcon";
import React from "react";

function MeetingOffer({ profilePicture, status, fullName, roomLink }) {
   return (
      <div className="offer">
         <UserAvatar imageUrl={profilePicture} status={status}></UserAvatar>
         <div>{fullName}</div>
         <a href={roomLink}>Join room here</a>
      </div>
   );
}

export default MeetingOffer;
