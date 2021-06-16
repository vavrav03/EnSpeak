import React from "react";
import { NormalPage } from "components/templates/NormalPage";
import RoomsTable from "components/organisms/Tables/RoomsTable";

function RoomsPage() {
   return (
      <NormalPage>
         <div className="offer-container">
            <RoomsTable />
         </div>
      </NormalPage>
   );
}

export default RoomsPage;
export { RoomsPage };
