import React from "react";
import {
   FacebookSocialIcon,
   GoogleSocialIcon,
   LinkedInSocialIcon,
   TwitterSocialIcon,
} from "components/atoms/SocialIcon";

function SocialMedia() {
   return (
      <div className={"social-media"}>
         <FacebookSocialIcon />
         <TwitterSocialIcon />
         <GoogleSocialIcon />
         <LinkedInSocialIcon />
      </div>
   );
}

export default SocialMedia;
export { SocialMedia };
