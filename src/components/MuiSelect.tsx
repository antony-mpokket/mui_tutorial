import React from "react";
import { Typography } from "@mui/material";

export const MuiSelect = () => {
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
    </div>
  );
};
