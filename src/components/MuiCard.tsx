import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Typography variant="h3">Card</Typography>
      <Typography variant="body1">
        Card contains content and actions about the single topic{" "}
      </Typography>
      <br />
      <Card>
        <CardContent>Simple Card</CardContent>
      </Card>
      <Card
        sx={{
          bgcolor: "#83e69d",
          my: "25px",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="unsplash-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="left">
            React
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            React Is a Library, Not a Framework One important distinction
            between libraries like React and frameworks like Ember. js and
            AngularJS is that React is concerned only with rendering the UI and
            leaves many things up to each project to put together.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          bgcolor: "#83e69d",
          my: "25px",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="left">
            Django
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Django is a high-level Python web framework that encourages rapid
            development and clean, pragmatic design. Built by experienced
            developers, it takes care of
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
