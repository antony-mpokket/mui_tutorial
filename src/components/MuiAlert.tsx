import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AlertTitle from "@mui/material/AlertTitle";

import PermDeviceInformationIcon from "@mui/icons-material/PermDeviceInformation";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const MuiAlert = () => {
  return (
    <>
      <Stack spacing={2}>
        <Alert severity="info" icon={<PermDeviceInformationIcon />}>
          <AlertTitle>Info Title</AlertTitle>
          Info Alert
        </Alert>
        <Alert severity="error" icon={<ErrorIcon />}>
          <AlertTitle>Error Title</AlertTitle>Error Alert
        </Alert>
        <Alert severity="warning" icon={<WarningIcon />}>
          <AlertTitle>Warning Title</AlertTitle>Warning Alert
        </Alert>
        <Alert icon={<CheckCircleIcon fontSize="inherit" />}>
          <AlertTitle>Success Title</AlertTitle>Success Alert
        </Alert>
        <br />
        <hr />
        <Alert variant="outlined" severity="info">
          Info Alert
        </Alert>
        <Alert variant="outlined" severity="error">
          Error Alert
        </Alert>
        <Alert variant="outlined" severity="warning">
          Warning Alert
        </Alert>
        <Alert variant="outlined">Success Alert</Alert>
        <br />
        <hr />
        <Alert variant="filled" severity="info">
          Info Alert
        </Alert>
        <Alert variant="filled" severity="error">
          Error Alert
        </Alert>
        <Alert variant="filled" severity="warning">
          Warning Alert
        </Alert>
        <Alert variant="filled">Success Alert</Alert>
        <br />
        <hr />
      </Stack>
    </>
  );
};

export default MuiAlert;
