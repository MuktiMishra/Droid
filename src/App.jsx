import Navbar from './components/Navbar/Navbar.jsx'
import { useState } from 'react';
import './index.css'
import Footer from './components/Footer/Footer.jsx';
import Homepage from './components/Homepage/Homepage.jsx';
import TeamSlider from './components/Team.jsx';
import EventSlider from './components/Events.jsx';

function App() {
  const [theme, setTheme] = useState('light'); 


  return (
    
    // <div className={`container ${theme}`}>
    //   <Navbar theme={theme} setTheme={setTheme}/>
    //   <Homepage />
    //   <Footer theme={theme} setTheme={setTheme}/>
    // </div>
    // <TeamSlider />
    <EventSlider />
  )
}

export default App
