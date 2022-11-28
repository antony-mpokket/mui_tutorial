import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3.5);
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
          icon={<FavoriteIcon fontSize='inherit' color='error' />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          
        />
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.1}
          size="large"
          icon={<FavoriteIcon fontSize='inherit' color='error' />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          readOnly
        />
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.1}
          size="large"
          icon={<FavoriteIcon fontSize='inherit' color='error' />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          highlightSelectedOnly
        />
        <h1>{value}</h1>
      </Stack>
    </div>
  );
};

export default MuiRating;
