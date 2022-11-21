import React from 'react'
import {Button} from '@mui/material'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import {Grid} from '@mui/material';
import {Chip} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Icon } from '@mui/material';

export const MuiButton = () => {
  return (
    <div>
        
        <Typography variant='h3' align="left">Butoon Collection</Typography>
        <Button variant='outlined' size='small' color='secondary'>Contained</Button>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button><br /><br />

        <Typography variant='h3' align="center">Text Button</Typography> 
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="https://v1.mui.com/guides/interoperability/">Link</Button>   

        <br /><br />
        <Typography variant='h3' align="center">Contained Button</Typography>
        <Stack direction="row" spacing={2}>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>Disabled</Button>
        <Button variant="contained" onClick={() => window.open("https://v1.mui.com/guides/interoperability/")} >Open new tap</Button>
        </Stack>

        <br /><br />
        <Typography variant='h3' align="left">Elevation disabled button</Typography>
        <Stack direction="row" spacing={2}>
        <Button variant="contained" fullWidth disableRipple disableElevation  sx={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px",
        color:"white"
    }} >
             elevation
        </Button>
        <Button variant="contained" disableElevation >
            Disable elevation
        </Button>
        <Button variant="contained" disableElevation disableFocusRipple >
            Disable elevation
        </Button>
        </Stack>

        <br /> <hr /><br />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
            <Button variant="contained"  >
                elevation
            </Button>
        </Grid>
        <Grid item xs={6}>
            <Button variant="contained" fullWidth >
                full Width
            </Button>
        </Grid>
        <Grid item xs={6}>
            <Button variant="contained" disableRipple >
                disable Ripple
            </Button>
        </Grid>
        <Grid item xs={6}>
            <Button variant="contained" disableElevation >
                Disable elevation
            </Button>
        </Grid>
        </Grid>

        <br /><br />
        <Typography align='left' variant="h3"> Gradiant buttons</Typography>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" disableElevation sx={{
                    color: 'white',
                    background: 'linear-gradient(to right bottom, #36EAEF, #6B0AC9)',
                }} >
                    Gradiant 
                </Button>
                <Button variant="contained" disableElevation sx={{
                   
                    background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
                    borderRadius: '3px',
                    border: 0,
                    color: 'white',
                    height: '48px',
                    padding: '0 30px',
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
                  
                }} >
                    Gradiant 
                </Button>
                <Button variant="contained" sx={{
                     background:' linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
                     fontSize:"30px"
                }}>Gradiant</Button>

                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient">linear gradient click here</a>
            </Stack>

            <br /><br />
            <hr />
            <Typography variant="h3" align="left">handling the button</Typography>
            <Stack direction="row" spacing={2}>
                <Button
                    onClick={() => {
                        console.log('Handling button working')
                        alert('clicked');
                    }}
                    >
                    Click me
                </Button> check in the console

            </Stack>

            <br /><br />
            <hr />
            <Typography variant="h3" align="left">Icon's button</Typography>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" sx={{
                    background:' linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
                    borderRadius: '35px',
                }}>
                    <SendIcon />
                </Button>

                <SendIcon  sx={{
                    color:' linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
                    borderRadius: '35px',
                }}/>
                <Icon color='primary'>
                    <SendIcon />
                </Icon>
                <Icon color='info'>
                    <SendIcon />
                </Icon>
                <Icon color='secondary'>
                    <SendIcon />
                </Icon>
                <Icon color='success'>
                    <SendIcon />
                </Icon>
                <Icon color='warning'>
                    <SendIcon />
                </Icon>
                <Icon color='error'>
                    <SendIcon />
                </Icon>
                <Icon color='inherit'>
                    <SendIcon />
                </Icon>

            </Stack>
    </div>

    

  )
}
