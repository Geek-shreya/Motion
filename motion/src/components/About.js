import * as React from 'react';
import { Button } from '@mui/material';
import motion from '../assets/MotionArtEffect-logo.png';
import logo1 from '../assets/bar1.png';
import logo2 from '../assets/bar2.png';
import logo3 from '../assets/bar3.png';
import star from '../assets/star.png';


export default function BasicTextFields() {
  return (
    <>
    <div>
        <img src={motion} alt = 'logo' style={{marginTop:'20px'}}/>
        <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: 'white' }, marginTop: '20px', padding:'20px 30px 20px 30px', float:'right', marginRight: '30px' }}>Purchase Now</Button>
      
        <div style={{display:'flex', flexWrap:'wrap'}}>
            <div >
                <p style={{ background: 'linear-gradient(orange, purple, blue)',color:'transparent', backgroundClip:'text', fontSize:'30px', margin:'100px 10px 8px 30px'}}>Transform <br/>your website</p>
                <p style={{ color:'white',fontSize:'23px', margin:'15px 10px 8px 30px'}}>with Motion<br/> Art Effect</p>
            </div>
            <div style={{marginTop:'120px'}}>
                <div style={{ color:'white',fontSize:'60px',marginLeft:'32%',width:'100%'}}>Attract Your Visitors <br/>Attention With <br/>Colorful</div>
                <div style={{ background: 'linear-gradient(orange, purple, blue)',color:'transparent', backgroundClip:'text',fontSize:'60px',marginLeft:'32%'}}>Motion Art Effect</div>
                <div style={{ color:'grey',fontSize:'18px',marginLeft:'32%', marginTop:'25px',width:'100%'}}>Unleash the power of creativity with Motion Art for Elementor - your ultimate <br/>solution for seamlessly integrating captivating animations into your website. 
                </div>
            </div>
        </div>
            <div style={{ color:'white',fontSize:'25px',  marginTop:'100px', textAlign:'center'}}>Trusted by thousands of users around the world</div>
                
        {/* tracks section */}
            <div style={{display:'flex', marginTop:'40px', alignItems:'center', justifyContent:'space-around',flexWrap:'wrap'}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
                    <img src={logo2} alt="Image 1" className='mx-100'/>
                    <div style={{marginLeft:'10px', fontWeight:'bold'}}><img src={star} style={{marginBottom:'10px'}}/><br/><span style={{color:'grey'}}>4.5 Score, 9 Reviews</span></div>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
                    <img src={logo1} alt="Image 2" className='mx-4'/>
                    <div style={{marginLeft:'10px', fontWeight:'bold'}}><img src={star} style={{marginBottom:'10px'}}/><br/><span style={{color:'grey'}}>4.5 Score, 9 Reviews</span></div>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
                    <img src={logo3} alt="Image 3" className='mx-4'/>
                    <div style={{marginLeft:'10px', fontWeight:'bold'}}><img src={star} style={{marginBottom:'10px'}}/><br/><span style={{color:'grey'}}>4.5 Score, 9 Reviews</span></div>
                </div>
                    </div>        
    </div>
    </>
  );
}
