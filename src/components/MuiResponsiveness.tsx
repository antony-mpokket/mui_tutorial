import React from "react";
import Box from "@mui/material/Box";
import { styled } from '@mui/material'
import { height } from "@mui/system";

const StyledBox = styled(Box)(({theme}) => ({
    height:'250px',
    width:'250px'
}))

const MuiResponsiveness = () => {
  return (
    <Box
      sx={{
        height: "300px",
        width: {
          xs: 100,
          sm: 200,
          md: 300,
          lg: 400,
          xl: 500,
        },
        bgcolor: "secondary.light",
      }}
    ></Box>
  );
};

export default MuiResponsiveness;
