import React from "react";
import { Typography, Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    // setCountries(event.target.value as string);
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  };
  return (
    <div>
      <Typography
        variant="h3"
        color="#0018ff"
        sx={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        Mui Select Components
      </Typography>
      <Typography variant="h6" align="left" sx={{ paddingLeft: "20px" }}>
        Select components are used for collecting user provided information from
        a list of options.
        <a
          style={{ color: "#0018ff" }}
          href="https://mui.com/material-ui/react-select/#main-content"
        >
          Click here
        </a>
      </Typography>
      <hr />

      <Box width="250px" sx={{ paddingLeft: "20px" }}>
        <TextField
          label="Select Country"
          select
          value={countries}
          onChange={handleChange}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size='small'
          color="secondary"
          helperText="Please select a country"
          error
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">America</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </div>
  );
};
