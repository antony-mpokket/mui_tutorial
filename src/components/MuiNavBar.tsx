import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from "@mui/material/Toolbar";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const MuiNavBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon color="warning" style={{ color: "#70ffe7" }} />
          </IconButton>
          <Typography
            align="left"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            pOKEmAN
          </Typography>
          <Stack direction="row" spacing={2} sx={{ align: "center" }}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Price</Button>
            <Button color="inherit">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <br />
      <h4>
        In the above navbar the pokeman text is not connect with the pokeman
        button have to connet with that pokeman so I'm wrapping the pokeman
        typograpy into the <b style={{ color: "red" }}>Iconbutton</b>
      </h4>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon color="warning" style={{ color: "#70ffe7" }} />
            <Typography
              align="left"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              pOKEmAN
            </Typography>
          </IconButton>

          <Stack direction="row" spacing={2} sx={{ align: "center" }}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Price</Button>
            <Button color="inherit">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <h4>
        In above navbar the Features, Price, Login Buttons comes to the left
        site but it should be in right site im going to try with typograpy, wrap
        the stack component inside the typograpy and align in right site
      </h4>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon color="warning" style={{ color: "#70ffe7" }} />
            <Typography
              align="left"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              pOKEmAN
            </Typography>
          </IconButton>
          <Typography
            align="left"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Stack direction="row" spacing={2} sx={{ align: "center" }}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Price</Button>
            <Button color="inherit">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <h4>
        Increasing the login buttons in the navbar lets see what will happen ,
        The log in button move away from the navbar
        How to fix if we have a lot of buttons
      </h4>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon color="warning" style={{ color: "#70ffe7" }} />
            <Typography
              align="left"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              pOKEmAN
            </Typography>
          </IconButton>
          <Typography
            align="left"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Stack direction="row" spacing={2} sx={{ align: "center" }}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Price</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MuiNavBar