import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="inherit" />
        </Stack>
      );
  }