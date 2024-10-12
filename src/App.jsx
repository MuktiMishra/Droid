import Navbar from './components/Navbar/Navbar.jsx'
import { useState } from 'react';
import './index.css'

function App() {
  const [theme, setTheme] = useState('light'); 


  return (
    
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
