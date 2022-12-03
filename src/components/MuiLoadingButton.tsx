import React from 'react'
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from '@mui/material/Stack'


const MuiLoadingButton = () => {
  return (
    <>
      <Stack spacing={2} direction="row">
        <LoadingButton>Loading Button</LoadingButton>
        <LoadingButton variant="contained">Loading Button</LoadingButton>
        <LoadingButton loading variant="outlined">
          Loading Button
        </LoadingButton>
        <LoadingButton loading variant="outlined" loadingIndicator="Loading...">
          Fetch Data
        </LoadingButton>
        <LoadingButton variant="contained" loading loadingIndicator="Loading...">
          Fetch Data
        </LoadingButton>
      </Stack>
    </>
  );
}

export default MuiLoadingButton