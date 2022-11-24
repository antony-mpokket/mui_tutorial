import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import {useState} from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'

// The user can select the number of year experience in the industry

export const MuiRadioButton = () => {
    const [value, setValue] = useState('')
    console.log({value})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="medium" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio size="small" color="info" />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel
            control={<Radio size="medium" color="success" />}
            label="6-10"
            value="6-10"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
