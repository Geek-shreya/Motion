import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import thumb from '../assets/thumb.png';
import light from '../assets/light.png';
import moon from '../assets/moon.png';


export default function MediaCard() {
  return (
    <div style={{display:'flex', flexWrap:'wrap'}}>
    <Card sx={{ maxWidth: 375 , height:'55vh', backgroundColor:'rgb(23, 4, 34)', borderRadius:'25px', border:'2px solid grey', margin:'60px 0 0 70px'}}>
      <CardMedia
        sx={{ height:'30vh', width:'50%'}}
        image={light}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white" sx={{fontSize:'30px'}}>
        Light Weight
        </Typography>
        <Typography variant="body2" color="grey" sx={{fontSize:'20px', marginTop:'15px'}}>
        Motion Art for Elementor is designed to be lightweight.
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 375 , height:'55vh', backgroundColor:'rgb(23, 4, 34)', borderRadius:'25px', border:'2px solid grey', margin:'60px 0 0 55px'}}>
      <CardMedia
        sx={{ height:'30vh', width:'50%'}}
        image={thumb}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white" sx={{fontSize:'30px'}}>
        100% Responsive
        </Typography>
        <Typography variant="body2" color="grey" sx={{fontSize:'20px', marginTop:'15px'}}>
        Create a consistent visual experience across all devices.
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 375 , height:'55vh', backgroundColor:'rgb(23, 4, 34)', borderRadius:'25px', border:'2px solid grey', margin:'60px 0 0 55px'}}>
      <CardMedia
        sx={{ height:'30vh', width:'50%'}}
        image={moon}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white" sx={{fontSize:'30px'}}>
        User Friendly Interface
        </Typography>
        <Typography variant="body2" color="grey" sx={{fontSize:'20px', marginTop:'15px'}}>
        Ensure a smooth experience for both applicants and administrators.
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
