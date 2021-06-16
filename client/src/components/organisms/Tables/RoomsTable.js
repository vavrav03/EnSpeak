import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import EnhancedTable from "./EnhancedTable";
import { getRoomsOfUser } from "redux/selectors";
import { connect } from "react-redux";
// import makeData from "./makeData";

const RoomsStable = ({roomsOfUser}) => {
   const columns = React.useMemo(
      () => [
         { Header: "Meeting time", accessor: "meeting_time" },
         {
            Header: "Link",
            accessor: "link",
            Cell: ({value}) => {
               return <a href={value} target="_blank">link</a>;
            },
         },
      ],
      []
   );

   return (
      <div>
         <CssBaseline />
         <EnhancedTable columns={columns} data={roomsOfUser} addButton={true} headding={"Your rooms"}/>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      roomsOfUser: getRoomsOfUser(state),
   };
};

export default connect(mapStateToProps, null)(RoomsStable);
