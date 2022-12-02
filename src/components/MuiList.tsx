import React from 'react'
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import AddModeratorTwoToneIcon from "@mui/icons-material/AddModeratorTwoTone";
import MailTwoToneIcon from "@mui/icons-material/MailTwoTone";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";


const MuiList = () => {
  return (
    <>
      <Typography variant="h2">List</Typography>
      <Typography variant="h4">We can use in contact page</Typography>
      <Typography variant="h6">
        Lists are a continuous group of text or images. They are composed of
        items containing primary and supplemental actions, which are represented
        by icons and text.
      </Typography>
      <br />
      <br />
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <MailTwoToneIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="List item 1" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <MailTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="List item 2" secondary="secondary 2" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="List item 3" secondary="secondary 3" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={<AddModeratorTwoToneIcon />} />
          </ListItem>
        </List>
      </Box>
    </>
  );
}

export default MuiList