import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Solutions from './components/Solutions';
import Product from './components/product';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { ProductProvider } from './components/ProductContext'; // Import ProductProvider

function App() {
  return (
    <ProductProvider> {/* Wrap the app in ProductProvider */}
      <Router>
        <div className='bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF]'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/solutions' element={<Solutions />} />
            <Route path='/products' element={<Product />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/contact-us' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
