import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import { makeStyles, withStyles } from "tss-react/mui";
// import { makeStyles } from "@mui/styles";

// import { useTheme } from "@mui/material/styles";

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: "auto",
//   },
//   paper: {
//     background: "blue",
//   },
// });

const MuiDrawer = () => {
  const [isDraweropen, setisDraweropen] = useState(false);

  return (
    <>
      <h1>
        The Drwer component is used to create the sidebar, contain n number of
        operations like nevigate to another page and also switch account ...etc{" "}
      </h1>
      <p style={{ fontSize: "25px" }}>
        Navigation drawers provide access to destinations in your app. Side
        sheets are surfaces containing supplementary content that are anchored
        to the left or right edge of the screen.
      </p>{" "}
      <hr />
      <IconButton
        size="large"
        edge="end"
        color="primary"
        aria-label="logo"
        onClick={() => setisDraweropen(true)}
        sx={{ textAlign: "left" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        // classes={{ paper: { background: "blue" } }}
        // variant="persistent"
        color="lime"
        style={{
          background: 'yellow',
        //   backgroundColor: "red",
        }}
        anchor="left"
        open={isDraweropen}
        onClose={() => setisDraweropen(false)}
      >
        <Box
          sx={{ backgroundColor: "red", color: "blue" }}
          p={2}
          width="250px"
          textAlign="center"
          role="presentation"
        >
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
