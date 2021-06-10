import React from "react";

function SocialIcon({ divClassName, iconClassName, onClick, ...rest }) {
   return (
      <div onClick={onClick} {...rest} className={divClassName}>
         <i className={iconClassName}></i>
      </div>
   );
}

function SocialIconCreator({ companyName, onClick, ...rest }) {
   return (
      <SocialIcon
         divClassName={`social-icon ${companyName}-icon`}
         iconClassName={`fab fa-${companyName}`}
         onClick={onClick}
         {...rest}
      />
   );
}

function FacebookSocialIcon() {
   return (
      <SocialIconCreator
         companyName={"facebook-f"}
         onClick={() => {
            console.log("facebook-f");
         }}
      />
   );
}

function TwitterSocialIcon() {
   return (
      <SocialIconCreator
         companyName={"twitter"}
         onClick={() => {
            console.log("twitter");
         }}
      />
   );
}

function GoogleSocialIcon() {
   return (
      <SocialIconCreator
         companyName={"google"}
         onClick={() => {
            console.log("google");
         }}
      />
   );
}

function LinkedInSocialIcon() {
   return (
      <SocialIconCreator
         companyName={"linkedin-in"}
         onClick={() => {
            console.log("linkedin-in");
         }}
      />
   );
}

function LockSocialIcon() {
   return (
      <SocialIcon
         divClassName={`lock-icon`}
         iconClassName={`fas fa-lock`}
         onClick={() => {}}
      />
   );
}

export default SocialIcon;
export {
   SocialIcon,
   FacebookSocialIcon,
   TwitterSocialIcon,
   GoogleSocialIcon,
   LinkedInSocialIcon,
   LockSocialIcon,
};
