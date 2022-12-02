import React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import MailTwoToneIcon from "@mui/icons-material/MailTwoTone";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";


const MuiBadge = () => {
  return (
    <>
      <Typography variant="h3">Badge</Typography>
      <Typography variant="h6">
        It's used to create a badge in the Icon's
      </Typography>
      <br />
      <br />
      <Stack spacing={2} direction="row">
        <Badge
          badgeContent={5}
          color="primary"
          children={<MailTwoToneIcon />}
        ></Badge>
        <Badge badgeContent={5} color="primary">
          <MailTwoToneIcon />
        </Badge>
        <Badge badgeContent={15} color="secondary" max={9}>
          <MailTwoToneIcon />
        </Badge>
        <Badge badgeContent={0} color="success" max={9}>
          <MailTwoToneIcon />
        </Badge>
        <Badge badgeContent={0} color="error" max={9} showZero>
          <MailTwoToneIcon />
        </Badge>
        <Badge badgeContent={<AddTwoToneIcon />} color="success">
          <MailTwoToneIcon />
        </Badge>
        <Badge
          badgeContent={<AddTwoToneIcon sx={{ width: 16, height: 16 }} />}
          color="warning"
        >
          <MailTwoToneIcon />
        </Badge>
        <Badge variant="dot" color="primary">
          <MailTwoToneIcon />
        </Badge>
        <Badge variant="dot" color="success">
          <MailTwoToneIcon />
        </Badge>
        <Badge variant="dot" color="error">
          <MailTwoToneIcon />
        </Badge>
        <Badge
          variant={"dot"}
          color="warning"
        >
          <MailTwoToneIcon />
        </Badge>
        <Badge variant="dot">
          <MailTwoToneIcon />
        </Badge>
      </Stack>
    </>
  );
};

export default MuiBadge;
