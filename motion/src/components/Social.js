import React from 'react'
import social from '../assets/social.png';

export default function Social() {
  return (
    <div>
      <div style={{backgroundColor:'rgb(23, 4, 34)', borderRadius:'25px',margin:'0 40px 0 40px'}}>
            <div style={{ color:'white',fontSize:'30px', marginTop:'200px', textAlign:'center', paddingTop:'35px'}}>Supported by All Popular Browsers</div>
            <div style={{ color:'grey',fontSize:'20px', marginTop:'25px', textAlign:'center'}}>Rest assured, Motion Art is designed to be compatible<br/> with all major web browsers.</div>
            <div style={{display:'flex', marginTop:'40px' ,justifyContent:'center'}}>
                <img src={social} alt="social" style={{marginBottom:'40px', width:'100%', maxWidth:'400px'}}/>
            </div>
        </div>

        <div>
            <div style={{ color:'white',fontSize:'43px', marginTop:'130px', textAlign:'center'}}>An All-Round Plugin With Powerful<br/> Features</div>
            <div style={{ color:'grey',fontSize:'20px',  marginTop:'25px', textAlign:'center'}}>Whether you're a seasoned web designer or just starting out, Motion Art for <br/>Elementor seamlessly integrates with the Elementor platform, providing you<br/> with a seamless and intuitive experience.</div>
        </div>
    </div>
  )
}
