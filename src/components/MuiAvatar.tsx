import React from 'react'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from "@mui/material/AvatarGroup";
import { Typography } from '@mui/material';
import Face2TwoToneIcon from "@mui/icons-material/Face2TwoTone";
import Face5TwoToneIcon from "@mui/icons-material/Face5TwoTone";
import DirectionsBikeTwoToneIcon from "@mui/icons-material/DirectionsBikeTwoTone";


const MuiAvatar = () => {
  return (
    <>
      <Typography variant="h2">Avatar</Typography>
      <br />
      <br />
      <Stack spacing={4}>
        <Stack direction="row" spacing={1}>
          <Avatar
            alt="BW"
            src="https://upload.wikimedia.org/wikipedia/en/1/19/Bruce_Wayne_%28The_Dark_Knight_Trilogy%29.jpg"
          />
          <Avatar
            alt="CK"
            src="https://sites.rutgers.edu/demo-project/wp-content/uploads/sites/16/2017/12/christopher-reeve-superman.jpg"
          />
          <Avatar
            alt="CK"
            src="ehttps://sites.rutgers.edu/demo-project/wp-content/uploads/sites/16/2017/12/christopher-reeve-superman.jpg"
          >
            CK
          </Avatar>
          <Avatar sx={{ background: "#31cbcb" }}>ZX</Avatar>
          <Avatar sx={{ background: "#31cbcb" }} alt="" />
          <Avatar variant="rounded" sx={{ background: "#31cbcb" }} alt="" />
          <Avatar variant="square" sx={{ background: "#31cbcb" }} alt="" />
          <Avatar variant="circular" sx={{ background: "#31cbcb" }} alt="" />
          <Avatar
            variant="circular"
            sx={{ background: "#31cbcb" }}
            alt=""
            children={<Face2TwoToneIcon color="secondary" />}
          />
          <Avatar
            variant="circular"
            sx={{ background: "white.light" }}
            alt=""
            children={<Face5TwoToneIcon color="primary" />}
          />
          <Avatar
            variant="circular"
            sx={{ background: "white.light" }}
            alt=""
            children={<DirectionsBikeTwoToneIcon color="success" />}
          />
        </Stack>
        <br />
        <br />
        <Typography variant="h4">Avatar Group</Typography>
        <Stack>
          <AvatarGroup max={4}>
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt="BW"
              src="https://upload.wikimedia.org/wikipedia/en/1/19/Bruce_Wayne_%28The_Dark_Knight_Trilogy%29.jpg"
            />
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt="CK"
              src="https://sites.rutgers.edu/demo-project/wp-content/uploads/sites/16/2017/12/christopher-reeve-superman.jpg"
            />
            <Avatar
              alt="CK"
              src="ehttps://sites.rutgers.edu/demo-project/wp-content/uploads/sites/16/2017/12/christopher-reeve-superman.jpg"
            >
              CK
            </Avatar>
            <Avatar sx={{ background: "#31cbcb" }}>ZX</Avatar>
            <Avatar sx={{ background: "#31cbcb" }} alt="" />
            <Avatar variant="rounded" sx={{ background: "#31cbcb" }} alt="" />
            <Avatar variant="square" sx={{ background: "#31cbcb" }} alt="" />
            <Avatar variant="circular" sx={{ background: "#31cbcb" }} alt="" />
          </AvatarGroup>
        </Stack>
      </Stack>
    </>
  );
}

export default MuiAvatar