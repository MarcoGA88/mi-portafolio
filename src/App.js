import React from 'react'
import './styles/tailwind.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Stack from './pages/Stack';
import Contact from './pages/Contact';
import Licensing from './pages/Licensing';
import Project1 from './Projects/Project1'


function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden font-ubuntu">
        <Sidebar />
        <div className="flex-grow overflow-y-auto custom-scrollbar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/licensing" element={<Licensing />} />
            <Route path='/project1' element={<Project1/>}/>
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;