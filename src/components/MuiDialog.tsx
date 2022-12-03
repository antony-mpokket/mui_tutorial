import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useState } from "react";


const MuiDialog = () => {
    const [open, setOpen] = useState(false);
    

  return (
    <>
      <Typography variant="h2">Dialog</Typography>
      <Typography variant="h6">
        Dialogs inform users about a task and can contain critical information,
        require decisions, or involve multiple tasks.
      </Typography>
      <br />
      <br />
      <hr />
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the test? you will not be able to
            edit after submitting.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}> Cancel</Button>
          <Button onClick={() => setOpen(false)} autoFocus>
            {" "}
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;
