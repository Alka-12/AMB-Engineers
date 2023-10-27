import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
// import Clients from './Pages/Clients';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Service from './Pages/Service';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Clients" element={<Clients />} /> */}
        <Route path="/Service" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;



// function App() {
//   return (
//     <>
//       <TopNavBar />
//       {/* <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/Products">Products</Link></li>
//           <li><Link to="/Clients">Clients</Link></li>
//           <li><Link to="/About">About</Link></li>
//           <li><Link to="/Contact">Contact</Link></li>
//         </ul>
//       </nav> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/Products" element={<Products />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Clients" element={<Clients />} />
//         <Route path="/Services" element={<Services />} />

//       </Routes>
//     </>
//   );
// }
// export default App;


