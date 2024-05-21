// import React from 'react'
// import card1 from '../assets/card1.png';
// import card2 from '../assets/card2.png';

// export default function Section() {
//   return (
//     <div>
//         <div style={{ color:'white',fontSize:'40px', marginTop:'200px', textAlign:'center'}}>Apply On Any Section Or Enable For<br/> Whole Page</div>
//         <div style={{marginTop:'80px', display:'flex', flexWrap:'wrap'}}>
//             <div>
//                 <div style={{backgroundColor:'rgb(6, 6, 34)', marginLeft:'50px', borderRadius:'25px', border:'2px solid grey'}}>
//                     <div style={{padding:'20px'}}>
//                         <div style={{ color: 'white', fontSize: '40px', marginLeft: '20px' }}>Apply On Section</div>
//                         <div style={{ color: 'grey', fontSize: '15px', marginTop: '25px', marginLeft: '20px' }}>Apply on section is a game-changer, offering an unparalleled way<br/> to manage applications directly from your website. </div>
//                 </div>
//                     <img src={card2} style={{margin:'30px'}}/>
//                 </div>
//             </div>
//             <div style={{marginTop:'60px'}}>
//                 <div style={{backgroundColor:'rgb(5, 5, 31)', marginLeft:'50px', borderRadius:'25px', border:'2px solid grey'}}>
//                     <div style={{padding:'20px'}}>
//                         <div style={{ color: 'white', fontSize: '40px', marginLeft: '20px' }}>Apply On Page</div>
//                         <div style={{ color: 'grey', fontSize: '15px', marginTop: '25px', marginLeft: '20px' }}>Take your website to new heights with Motion Art for Elementor.<br/> Embrace the power of motion and animation. </div>
//                 </div>
//                     <img src={card1} style={{margin:'30px'}}/>
//                 </div>
//             </div>
            
//         </div>
//     </div>
//   )
// }

import React from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';

export default function Section() {
  const cardStyle = {
    backgroundColor: 'rgb(6, 6, 34)',
    borderRadius: '25px',
    border: '2px solid grey',
    padding: '20px',
    boxSizing: 'border-box',
    margin: '10px',
  };

  const upperCardStyle = {
    ...cardStyle,
    backgroundColor: 'rgb(6, 6, 34)',
  };

  const lowerCardStyle = {
    ...cardStyle,
    backgroundColor: 'rgb(5, 5, 31)',
    marginTop: '40px', // Adjust this value as needed
  };

  const imageStyle = {
    margin: '30px',
    width: 'calc(100% - 60px)',
    maxWidth: '100%',
  };

  const containerStyle = {
    padding: '20px',
  };

  const headerStyle = {
    color: 'white',
    fontSize: '40px',
    marginTop: '200px',
    textAlign: 'center',
  };

  const wrapperStyle = {
    marginTop: '80px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  // Media query styles for mobile view
  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .wrapper {
        flex-direction: column;
        align-items: center;
      }
      .card {
        flex: 1 1 100%;
        max-width: 100%;
        margin: 10px 0;
      }
      .lower-card {
        margin-top: 20px;
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{mediaQueryStyles}</style>
      <div style={headerStyle}>
        Apply On Any Section Or Enable For<br /> Whole Page
      </div>
      <div className="wrapper" style={wrapperStyle}>
        <div className="card" style={upperCardStyle}>
          <div style={{ color: 'white', fontSize: '40px', marginLeft: '20px' }}>Apply On Section</div>
          <div style={{ color: 'grey', fontSize: '15px', marginTop: '25px', marginLeft: '20px' }}>
            Apply on section is a game-changer, offering an unparalleled way<br /> to manage applications directly from your website.
          </div>
          <img src={card2} alt="Card 2" style={imageStyle} />
        </div>
        <div className="card lower-card" style={lowerCardStyle}>
          <div style={{ color: 'white', fontSize: '40px', marginLeft: '20px' }}>Apply On Page</div>
          <div style={{ color: 'grey', fontSize: '15px', marginTop: '25px', marginLeft: '20px' }}>
            Take your website to new heights with Motion Art for Elementor.<br /> Embrace the power of motion and animation.
          </div>
          <img src={card1} alt="Card 1" style={imageStyle} />
        </div>
      </div>
    </div>
  );
}
