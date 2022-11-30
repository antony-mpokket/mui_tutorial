import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const MuiLayout = () => {
  return (
    <>
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
      <Box
        display="flex"
        height="px"
        width="100px"
        bgcolor="success.light"
        p={15}
      >
        Direct
      </Box>
      <br />
      <br /> <hr />
      <Typography variant="h3" align="center">
        Stack
      </Typography>
      <Typography variant="body1" align="left">
        This component is used to create the layout in <b>one dimention</b> the
        vertical or the horizontal
      </Typography>
      <Stack
        sx={{
          boder: "1px solid",
          width: "500px",
          height: "500px",
          p: 1,
          backgroundColor: "yellowgreen",
        }}
      >
        <b
          style={{
            paddingTop: "50%",
          }}
        >
          {" "}
          I'm A Stack
        </b>
      </Stack>
      <br />
      <br />
      <hr />
      <Typography variant="h3" align="center">
        Grid
      </Typography>
      <Typography variant="body1" align="left">
        This componet is 2-d layout components. it's used to create the layout
      </Typography>{" "}
      <br />
      <Grid container my={2}>
        <Grid item xs={9}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box bgcolor="error.dark" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="success.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box bgcolor="warning.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
      <br />
      <br />
      <h6>Let we check the mobile responsive of the grid</h6>
      <Grid container my={2}>
        <Grid item sm={6} xs={12}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box bgcolor="error.dark" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box bgcolor="success.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box bgcolor="warning.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>{" "}
      <hr />
      <br />
      <br />
      <Typography variant="h3" align="center" color="primary">
        Paper
      </Typography>
      <Typography variant="body1" align="left">
        The Paper component is surface component its used to create the view
        hierarchy in the UI development and also it's used as a we can do
        elevation and shadow
      </Typography>
      <Paper
        elevation={24}
        sx={{
          padding: "32px",
          alignContent: "center",
          width: "100px",
          height: "100px"
        }}
      >
        This is paper
      </Paper>
      
    </>
  );
};

export default MuiLayout;
