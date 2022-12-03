import React from 'react'
import Tooltip from "@mui/material/Tooltip";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";


const MuiTooltip = () => {
  return (
    <>
      <Stack direction={"row"} spacing={2}>
        <Tooltip title="delete">
          <IconButton
            color="inherit"
            sx={{
              background: "linear-gradient(#e66465, #9198e5);",
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="delete" arrow>
          <IconButton
            color="inherit"
            sx={{
              background: "linear-gradient(#e66465, #9198e5);",
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="delete" arrow describeChild>
          <IconButton
            color="inherit"
            sx={{
              background: "linear-gradient(#e66465, #9198e5);",
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip open title="delete" arrow describeChild>
          <IconButton
            color="inherit"
            sx={{
              background: "linear-gradient(#e66465, #9198e5);",
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip open placement='left' title="delete" arrow describeChild>
          <IconButton
            color="inherit"
            sx={{
              background: "linear-gradient(#e66465, #9198e5);",
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip open placement='right' title="delete" arrow describeChild>
          <IconButton
            color="inherit"
            sx={{
              background: "linear-gradient(#e66465, #9198e5);",
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  );
}

export default MuiTooltip