import { Typography } from '@mui/material';
import { Alert } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>H1 Heading</Typography>
        <Typography variant='h2'>H2 Heading</Typography>
        <Typography variant='h3'>H3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom={true}>H4 Heading</Typography>
        <Typography variant='h5'>H5 Heading</Typography>
        <Typography variant='h6'>H6 Heading</Typography>
        <Typography variant='subtitle1'>subtitle 1</Typography>
        <Typography variant='subtitle2'>subtitle 2</Typography>
        <Typography variant='body1'>body 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id magni, consectetur fugit temporibus laudantium ipsum ab dignissimos rem incidunt nemo illum adipisci quasi similique quia optio sunt officiis possimus.</Typography>
        <Typography variant='body2'>body 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ducimus laudantium consequuntur ipsa veniam delectus, deserunt eius maiores et ipsum recusandae accusamus facilis sapiente incidunt quisquam ab dolores ex animi.</Typography>
        <Alert severity="success">This is a success alert — check it out!</Alert>    
    </div>
  )
}


