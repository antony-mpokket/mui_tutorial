import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import Button from './components'
import { MuiButton } from "./MuiButton";

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log(value);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <div>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.1}
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.1}
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="primary" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          readOnly
        />
        <Rating
          value={value}
          onChange={handleChange}
          precision={2}
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="success" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          highlightSelectedOnly
        />
        <FavoriteIcon
          sx={{
            width: "500px",
            height: "500px",
            background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
          }}
          color="primary"
        />
        <h1>{value}</h1>
      </Stack>
      {/* <MuiButton /> */}
    </div>
  );
};

export default MuiRating;
