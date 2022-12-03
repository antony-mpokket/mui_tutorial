import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import { useState, forwardRef } from "react";
import Alert from "@mui/material/Alert";
import {AlertProps} from "@mui/material";


const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref){
        return <Alert elevation={6} ref={ref} {...props} />;
    } 
)


const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?:string) => {
    if(reason === 'clickaway'){
        return
    }
    setOpen(false);
  };
  return (
    <>
      <Typography variant="h3">Snackbar</Typography>
      <Typography variant="h6">
        Snackbars provide brief notifications. The component is also known as a
        toast.
      </Typography>
      <Stack spacing={2}>
        <Button onClick={() => setOpen(true)}>Submit</Button>
        <Snackbar
          message="Form submitted successfully"
          autoHideDuration={4000}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
        />
      </Stack>
      <Stack spacing={2}>
        <Button onClick={() => setOpen(true)}>Submit</Button>
        <Snackbar
          autoHideDuration={6000}
          open={open}
          onClose={handleClose}
        />
        <SnackbarAlert onClose={handleClose}>
            Form submitted successfully
        </SnackbarAlert>
      </Stack>
    </>
  );
};

export default MuiSnackbar;
