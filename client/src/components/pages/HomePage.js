import React from "react";
import { NormalPage } from "components/templates/NormalPage";
import MeetingOffer from "components/molecules/MeetingOffer";
import OfferTable from "components/organisms/Tables/OfferTable";
import { Redirect } from "react-router";

function HomePage() {
   return (
      <Redirect to="/offers" />
   );
}

export default HomePage;
export { HomePage };