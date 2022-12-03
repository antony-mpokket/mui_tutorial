import React from "react";
import Typography from "@mui/material/Typography";
import STack from "@mui/material/Stack";
import { Stack } from "@mui/system";
import Chip from "@mui/material/Chip";

const MuiChip = () => {
  const handleClick = () => {
    alert("You clicked the Chip.");
  };
  const handleDelete = () => {
    alert("You deleted the Chip.");
  }
  return (
    <>
      <Typography variant="h2">Chip</Typography>
      <Typography variant="h6">
        Chips allow users to enter information, make selections, filter content,
        or trigger actions. While included here as a standalone component, the
        most common use will be in some form of input, so some of the behavior
        demonstrated here is not shown in context.
      </Typography>
      <br />
      <br />
      <hr />
      <Stack direction={"row"} spacing={2}>
        <Chip color="warning" label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
      </Stack>
      <br />
      <Stack direction={"row"} spacing={2}>
        <Chip color="success" label="Clickable" onClick={handleClick} />
        <Chip
          color="error"
          label="Clickable"
          variant="outlined"
          onClick={handleClick}
        />
      </Stack>
      <br />
      <Stack direction={'row'} spacing={2}>
        <Chip color="secondary" label="Deletable" onDelete={handleDelete} />
        <Chip
          color="primary"
          label="Deletable"
          variant="outlined"
          onDelete={handleDelete}
        />
      </Stack>
      <br />
      <Stack direction={"row"} spacing={2}>
        <Chip color="secondary" label="Disabled" disabled />
        <Chip
          color="secondary"
          label="Disabled"
          variant="outlined"
          disabled
        />
      </Stack><br />
      <Stack direction={"row"} spacing={2}>
        <Chip  label="Gradiend" sx={{ background: "linear-gradient(#e66465, #9198e5);"}} />
        <Chip
          sx={{
            background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);"
          }}
          color="secondary"
          label="Disabled"
          variant="outlined"
          disabled
        />
      </Stack>
    </>
  );
};

export default MuiChip;
