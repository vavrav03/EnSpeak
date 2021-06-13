import React from "react";
import {
   FacebookSocialIcon,
   GoogleSocialIcon,
   LinkedInSocialIcon,
   TwitterSocialIcon,
} from "components/atoms/SocialIcon";
import { notImplementedYet } from "redux/actions/error";
import { connect } from "react-redux";

function SocialMedia({showNotImplementedYet}) {
   return (
      <div className={"social-media"}>
         <a href="/api/auth/facebook">
            <FacebookSocialIcon />
         </a>
         <div onClick={showNotImplementedYet}>
            <TwitterSocialIcon />
         </div>
         <a href="/api/auth/google">
            <GoogleSocialIcon />
         </a>
         <div onClick={showNotImplementedYet}>
            <LinkedInSocialIcon />
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      showNotImplementedYet: () => dispatch(notImplementedYet())
   }
}

const ConnectedSocialMedia = connect(null, mapDispatchToProps)(SocialMedia);

export default ConnectedSocialMedia;
export { ConnectedSocialMedia, SocialMedia };
