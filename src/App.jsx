import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Laptop from "./pages/Laptop";
import SmartWatch from "./pages/SmartWatch";
import Headphones from "./pages/Headphones";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />


        {/* Product Pages */}

        <Route 
          path="/laptop" 
          element={<Laptop />} 
        />


        <Route 
          path="/smartwatch" 
          element={<SmartWatch />} 
        />


        <Route 
          path="/headphones" 
          element={<Headphones />} 
        />


      </Routes>


      <Footer />

    </BrowserRouter>
  );
}

export default App;