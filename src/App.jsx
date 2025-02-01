import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Solutions from './components/Solutions';
import Product from './components/product';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <div className='bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF]'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
 
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/products' element={<Product />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
