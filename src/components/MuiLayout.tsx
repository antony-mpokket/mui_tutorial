import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { color } from "@mui/system";

const MuiLayout = () => {
  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        color="white"
        sx={{
          background:
            "linear-gradient(217deg, rgba(43, 255, 3, 0.8), rgba(17, 30, 250, 0.8) 70.71%)",
        }}
      >
        MuiLayout
      </Typography>
      <Typography variant="body1" align="left" color="#8000ed">
        The layout components is used to create the layout of the component.
        <b>
          The layout component is act as wrapper componnet for a more mui
          components
        </b>{" "}
        <br />
        <b style={{ color: "red" }}>
          The Box Componet is also a replacement of the{" "}
          <i style={{ color: "black" }}>div</i> component
        </b>
      </Typography>
      <Box
        sx={{
          color: "blue",
        }}
        component="h1"
      >
        This is Box element
      </Box>
      <Box>
        The Box Element accept the the two props sx
        <b>
          {" "}
          Style of the box we can use the actual css with slight modification{" "}
        </b>{" "}
        and component(
        <b>all html elemts</b>)
      </Box>{" "}
      <hr />
      <br />
      <Box
        component="span"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Codevolution
      </Box>
      <br />
      <Box display="flex" height="px" width="100px" bgcolor="success.light" p={15}>
        Direct
      </Box>
    </div>
  );
};

export default MuiLayout;
