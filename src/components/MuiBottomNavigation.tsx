import React from "react";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import PersonTwoToneIcon from "@mui/icons-material/PersonTwoTone";

import { useState } from "react";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  console.log(value);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="h2">Bottom Navigation</Typography>
      <Typography variant="h5">
        Bottom Navigation is mainly used in the mobile responsive and handle
        quick navigation in for mobile users
      </Typography>
      <br />
      <br />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ width: "100%", position: "absolute", bottom: 0 }}
      >
        <BottomNavigationAction
          showLabel
          label="home"
          icon={<HomeTwoToneIcon color="primary" />}
        />
        <BottomNavigationAction
          showLabel
          label="Favourite"
          icon={<FavoriteTwoToneIcon color="secondary" />}
        />
        <BottomNavigationAction
          showLabel
          label="Person"
          icon={<PersonTwoToneIcon color="primary" />}
        />
      </BottomNavigation>
    </>
  );
};

export default MuiBottomNavigation;
