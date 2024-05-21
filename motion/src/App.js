import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Wand from './components/Wand/Wand';
import Section from './components/Section';
import Social from './components/Social';
import Cards from './components/Cards';
import Footer from './components/Footer';
import MouseParticles from 'react-mouse-particles'

function App() {
  return (
    <div>
      <div className='container'>
        <div>
          <Navbar/>
          <About/>  
          <Wand/>
          <Section/>
          <Social/>
          <Cards/>
          <Footer/>
          <MouseParticles g={1} color="random" cull="col,image-wrapper" radius="30"/>
        </div>
      </div>
    </div>
  );
}

export default App;
