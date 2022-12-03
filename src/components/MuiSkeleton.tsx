import React from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Skeleton from "@mui/material/Skeleton";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box'
import Avatar from "@mui/material/Avatar";


const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);

  return (
    <>
      <Typography variant="h2">Skeleton</Typography>
      <Typography variant="h6">
        Display a placeholder preview of your content before the data gets
        loaded to reduce load-time frustration.
      </Typography>
      <br />
      <br />
      <hr />
      <Stack
        width="250px"
        spacing={2}
        direction="column"
        sx={{
          background: "linear-gradient(green, red);",
        }}
      >
        <Skeleton />
        <Skeleton variant="text" />
        <Skeleton variant="text" animation={false} />
        <Skeleton
          sx={{ color: "blue" }}
          variant="circular"
          width={40}
          height={40}
        />
        <Skeleton width={200} height={100} variant="rectangular" />
        <Skeleton variant="rounded" />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={210}
          height={118}
        />
      </Stack>
      <br />
      <br />
      <hr />
      <Box sx={{ width: "250px" }}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={256}
            height={144}
            animation="wave"
          />
        ) : (
          <img
            src="https://source.unsplash.com/random/256x144"
            alt="skeleton"
            width={256}
            height={144}
          />
        )}

        <Stack
          direction="row"
          spacing={1}
          sx={{ width: "100%", marginTop: "12px" }}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          ) : (
            <Avatar>V</Avatar>
          )}

          <Stack sx={{ width: "80%" }}>
            {loading ? (
              <>
                <Typography variant="body1">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
                <Typography variant="body2">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="body1">React MUI Tutorial</Typography>
              </>
            )}
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default MuiSkeleton