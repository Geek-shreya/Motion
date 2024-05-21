// import React from 'react'
// import './style.css';
// import wand from '../../assets/wand.png';

// export default function Wand() {
//   return (
//     <>
//         <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-start', padding:'20px'}}>
//             <div style={{maxWidth:'60%'}}>
//                 <div style={{ color:'white',fontSize:'40px', marginTop:'100px', marginLeft:'20px'}}>Turn Your Cursor Into A Colorful Magic<br/> Wand & Charm Your Visitors</div>
//                 <div style={{ color:'grey',fontSize:'20px',  marginTop:'25px', marginLeft:'20px'}}>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse<br/> your website with visually stunning motion art elements.</div>
//             </div>
//             <div>
//                 <button class="btn" type="button">
//                     <strong>Purchase From Envate ⮕</strong>
//                     <div id="container-stars">
//                         <div id="stars"></div>
//                     </div>

//                     <div id="glow">
//                         <div class="circle"></div>
//                         <div class="circle"></div>
//                     </div>
//                 </button>
//             </div>
//             <div style={{maxWidth:'30%', textAlign:'right'}}>
//                 <img src={wand} style={{ width: '100%', height: 'auto', marginTop:'100px' }}/>
//             </div>
//         </div>
//     </>
//   )
// }

import React from 'react';
import './style.css';
import wand from '../../assets/wand.png';

export default function Wand() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', padding: '20px' }}>
      <div style={{ flex: '1 1 60%', marginTop: '100px' }}>
        <div style={{ color: 'white', fontSize: '40px', marginLeft: '20px' }}>
          Turn Your Cursor Into A Colorful Magic<br /> Wand & Charm Your Visitors
        </div>
        <div style={{ color: 'grey', fontSize: '20px', marginTop: '25px', marginLeft: '20px' }}>
          Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse<br /> your website with visually stunning motion art elements.
        </div>
        <div style={{ marginTop: '25px', marginLeft: '20px' }} >
          {/* <button className="btn" type="button">
            <strong>Purchase From Envato ⮕</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </button> */}
          <button className='btn'>
            <span> Purchase From Envato ⮕
            </span>
          </button>
        </div>
      </div>
      <div style={{ flex: '1 1 30%', textAlign: 'right', marginTop: '100px' }}>
        <img src={wand} alt="Magic Wand" style={{ width: '60%', height: 'auto' }} />
      </div>
    </div>
  );
}

