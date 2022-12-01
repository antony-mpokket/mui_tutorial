import React from 'react'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'


const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary">
        secondary
      </Link>
      <Link href="#" color="secondary" underline="hover">
        hover link
      </Link>
      <Typography variant='h6'>
        <Link href="#" color="secondary" underline="hover">
          hover link
        </Link>
      </Typography>
    </Stack>
  );
}

export default MuiLink