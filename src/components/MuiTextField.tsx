import React from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { Typography } from "@mui/material";

export const MuiTextField = () => {
  return (
    <div>
      {/* <Typography variant="h1">Test asdf</Typography> */}
      <Typography variant="h3" align="left">
        Text Field Collections
      </Typography>
      <Stack
        spacing={2}
        sx={{
          // backgroundColor: 'primary.dark',
          backgroundColor:
            "background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
          border: "1px dashed grey",
          // p:3
          color: "green",
          paddingTop: "20px",
          paddingLeft: "20px",
        }}
      >
        <Typography variant="h3" align="left">
          {" "}
          Variant=standanrd{" "}
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Name"
            variant="standard"
            sx={{
              backgroundColor: "#03fcec",
            }}
          />
          <TextField label="Email" variant="standard" />
          <TextField label="Phone Number" variant="standard" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField label="First Name" variant="standard" />
          <TextField label="Last Name" variant="standard" />
          <TextField label="Father Name" variant="standard" />
        </Stack>
        <br />
        <br />
        <hr />
        <Typography variant="h3" align="left">
          variant=outlined
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            sx={{
              backgroundColor: "#03fcec",
            }}
          />
          <TextField label="Email" variant="outlined" />
          <TextField label="Phone Number" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField label="First Name" variant="outlined" />
          <TextField label="Last Name" variant="outlined" />
          <TextField label="Father Name" variant="outlined" />
        </Stack>
        <br />
        <br />
        <hr />
        <Typography variant="h3" align="left">
          variant=filled
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField label="First Name" variant="filled" />
          <TextField label="Last Name" variant="filled" />
          <TextField label="Father Name" variant="filled" />
        </Stack>
        <br />
        <br />
        <Typography variant="h3" align="left">
          variety of textfields
        </Typography>
        <Stack direction="column" spacing={2}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="This field is a required field and defalut value with 'Hello World'"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="You can't able to edit this field this is a Disabled field "
          />
          <TextField
            fullWidth
            label="textfield"
            helperText="I'm a helperText"
            id="im-a-id"
          />
          <TextField
            id="Outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            label="text"
            type="text"
            id="outlined-input"
            defaultValue="I'm a read only field "
            InputProps={{
              // readOnly: true,
              maxRows: 2,
              minRows: 1,
              // maxLength:100,
              // minLength:50,
              // required: true,
              // length=4,
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField label="test" />
        </Stack>
        <br />
        <br />
        <Typography variant="h3" align="left">
          Tutorial excersice
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            id="filled-end-adornment"
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <TextField
            label="With normal TextField"
            id="filled-start-adornment"
            // sx={{ m: 1, width: "25ch" }}
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
            variant="outlined"
          />
          <TextField
            label="Amount"
            // id="filled-start-adornment"
            // sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            inputProps={{ maxLength: 12 }}
            variant="outlined"
          />
          <TextField
            required
            id="required"
            label="Required"
            defaultValue="Hello World"
            inputProps={{ maxLength: 12 }}
          />
        </Stack>
      </Stack>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
