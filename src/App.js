import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Clients from './Pages/Clients';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import About from './Pages/About';
import NavBar from './Components/Navbar';
import Services from './Pages/Services';

function App() {
  return (
    <>
      <NavBar />
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/Clients">Clients</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </>
  );
}
export default App;
