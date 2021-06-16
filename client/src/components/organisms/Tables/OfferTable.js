import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import EnhancedTable from "./EnhancedTable";
import { getRoomsOfOthers } from "redux/selectors";
import { connect } from "react-redux";
import UserAvatar from "components/atoms/UserIcon";
// import makeData from "./makeData";

const OfferTable = ({ roomsOfOthers }) => {
   const columns = React.useMemo(
      () => [
         {
            Header: "Profile picture",
            accessor: "profilePicture",
            Cell: (props) => {
               const { profile_picture, status } = props.row.original.owner;
               return <UserAvatar imageUrl={profile_picture} status={status}></UserAvatar>
            }
         },
         {
            Header: "Full name",
            accessor: "full_name",
            Cell: (props) => {
               const { full_name, first_name, last_name } = props.row.original.owner;
               return full_name || `${first_name} ${last_name}`;
            },
         },
         {
            Header: "Link",
            accessor: "link",
            Cell: ({value}) => {
               return <a href={value} target="_blank">link</a>;
            },
         },
         { Header: "Meeting time", accessor: "meeting_time" },
      ],
      []
   );

   const [data, setData] = React.useState([]);

   return (
      <div>
         <CssBaseline />
         <EnhancedTable columns={columns} data={roomsOfOthers} addButton={false} headding={"Meeting offers"}/>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      roomsOfOthers: getRoomsOfOthers(state),
   };
};

export default connect(mapStateToProps, null)(OfferTable);
