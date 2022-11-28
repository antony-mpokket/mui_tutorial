import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import React, { useState, useCallback } from "react";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

const DarkModeChanges = (props: any) => {
  if (props.checked) {
    return (
      <div>
        <Typography variant="body1" color="primary" align="center">
          The dark mode is enabled
        </Typography>
      </div>
    );
  } else {
    return <></>;
  }
};

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <SnackbarProvider maxSnack={3}>
        <Typography variant="h3" align="left">
          Switch Component
        </Typography>
        <Box>
          <FormControlLabel
            label="Dark Mode"
            control={
              <Switch checked={checked} onChange={handleChange} size="small" color="primary"/>
            }
          />
          <DarkModeChanges checked={checked} />
        </Box>
      </SnackbarProvider>
    </div>
  );
};

export default MuiSwitch;
