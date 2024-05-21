import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {grey} from '@mui/material/colors';


export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: grey[900]}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'lightgreen' }}
          >
            evantomarket
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: grey[700], color: grey[50], '&:hover': { backgroundColor: grey[800] } }}>Buy Now</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
