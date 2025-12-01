import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import { pageview } from './ga';

export default function App(){
  const location = useLocation();

  useEffect(() => {
    // send pageview on route change
    pageview(location.pathname + location.search, document.title || location.pathname);
  }, [location]);

  return (
    <>
      <header>
        <div className="container">
          <h1 style={{margin:0}}>GA4 React Demo — Advanced</h1>
          <nav style={{marginTop:8}}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
