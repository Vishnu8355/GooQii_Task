
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Carousel from './components/Crousel/Carousel';
import ProductDescription from './components/Products/ProductDescription';
import ProductCard from './components/Products/ProductCard';
import LandingPage from './components/Products/Layout/LandingPage';

function App() {
  return (
    <div >


      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/productDiscription/:id" element={<ProductDescription/>}/>
        </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
