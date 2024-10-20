import Navbar from './components/Navbar/Navbar.jsx';
import { useState } from 'react';
import './index.css';
import Footer from './components/Footer/Footer.jsx';
import Homepage from './components/Homepage/Homepage.jsx';
import TeamSlider from './components/Team.jsx';
import EventSlider from './components/Events.jsx';
import VideoSlider from './components/Projects.jsx';
import ProjectSlider from './components/Projects.jsx';
import ContactUs from './components/Contact.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <Router>
  <div className={`app ${theme}`}>
    <Navbar theme={theme} setTheme={setTheme} />
    <div className="main-content">
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<EventSlider />} />
        <Route path="/projects" element={<ProjectSlider />} />
        <Route path="/team" element={<TeamSlider />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Add other routes */}
      </Routes>
    </div>
    <Footer theme={theme} setTheme={setTheme} />
  </div>
</Router>

  );
}

export default App;
