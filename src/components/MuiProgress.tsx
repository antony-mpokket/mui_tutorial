import React from "react";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";


const MuiProgress = () => {
  return (
    <>
      <Typography variant="h2">Progress</Typography>
      <Typography variant="h6">
        Progress indicators commonly known as spinners, express an unspecified
        wait time or display the length of a process.
      </Typography>
      <Stack spacing={2} direction="row">
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="info" />
        <CircularProgress color="warning" />
        <CircularProgress color="inherit" />
        <CircularProgress color="primary" />
      </Stack>
      <br />
      <Stack spacing={2} direction="row">
        <CircularProgress thickness={10}/>
        <CircularProgress color="secondary" variant="determinate" value={60} />
        <CircularProgress color="success" />
        <CircularProgress color="info" />
        <CircularProgress color="warning" />
        <CircularProgress color="inherit" />
        <CircularProgress color="primary" />
      </Stack>
      <br />
      <Stack spacing={2} direction="column">
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="info" />
        <LinearProgress color="warning" />
        <LinearProgress color="inherit" />
        <LinearProgress color="primary" />
      </Stack>
    </>
  );
};

export default MuiProgress;
