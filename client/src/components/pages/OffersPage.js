import React, { useEffect } from "react";
import { NormalPage } from "components/templates/NormalPage";
import OfferTable from "components/organisms/Tables/OfferTable";
import { attemptGetRooms } from "redux/actions/rooms";
import { connect } from "react-redux";

function OffersPage({ attemptGetRooms }) {
   useEffect(() => {
      attemptGetRooms();
   }, []);
   return (
      <NormalPage>
         <div className="offer-container">
            <OfferTable />
         </div>
      </NormalPage>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      attemptGetRooms: () => dispatch(attemptGetRooms()),
   };
};

export default connect(null, mapDispatchToProps)(OffersPage);
export { OffersPage };
