import Navbar from './components/Navbar/Navbar.jsx'
import { useState } from 'react';
import './index.css'
import Footer from './components/Footer/Footer.jsx';
import Homepage from './components/Homepage/Homepage.jsx';

function App() {
  const [theme, setTheme] = useState('light'); 


  return (
    
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Homepage />
      <Footer theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
