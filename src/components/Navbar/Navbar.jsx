import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/Droid Black.png'
import logo_dark from '../../assets/DROID white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'

const Navbar = ({theme , setTheme}) => {
  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark' : 'light')
  }
  
  return (
    <div className='navbar'>
        <img src={theme == 'light'? logo_light : logo_dark} alt='logo' className='logo' />
        <h2>DROID</h2>
        <ul className='nav-links'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Login</li>
        </ul>
        <div className='search-box'>
                <input type='text' placeholder='Search...' />
                <img src={theme== 'light' ? search_icon_light : search_icon_dark} alt='' />
            </div>
            <img src={theme== 'light'? toggle_light: toggle_dark} alt='' className='toggle-icon' onClick={()=>toggleTheme()}/>
      
    </div>
  )
}

export default Navbar
