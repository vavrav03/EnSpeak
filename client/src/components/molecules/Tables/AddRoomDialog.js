import React from "react";

import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import { connect } from "react-redux";
import { attemptPostRoom } from "redux/actions/rooms";

const AddRoomDialog = ({attemptPostRoom}) => {
   const [meetingTime, setMeetingTime] = React.useState();
   const [open, setOpen] = React.useState(false);

   const handleMeetingTImeChange = (e) => {
      setMeetingTime(e.target.value);
   }

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleAdd = (event) => {
      attemptPostRoom(meetingTime);
      setOpen(false);
   };

   return (
      <div>
         <Tooltip title="Add">
            <IconButton aria-label="add" onClick={handleClickOpen}>
               <AddIcon />
            </IconButton>
         </Tooltip>
         <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create room</DialogTitle>
            <DialogContent>
               <TextField
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  // className={classes.textField}
                  InputLabelProps={{
                     shrink: true,
                  }}
                  value={meetingTime}
                  onChange={handleMeetingTImeChange}
               />
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color="primary">
                  Cancel
               </Button>
               <Button onClick={handleAdd} color="primary">
                  Add
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
};

AddRoomDialog.propTypes = {
   addUserHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
   return {
      attemptPostRoom: (textDateValue) =>
         dispatch(attemptPostRoom(new Date(textDateValue))),
   };
};

export default connect(null, mapDispatchToProps)(AddRoomDialog);
