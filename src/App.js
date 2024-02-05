import React from 'react';
import './scss/main.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Term from './pages/Term';
import About from './pages/About';
import Shop from './pages/Shop';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import { Routes, Route } from "react-router-dom";
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import Order from './pages/Order';

function App() {

  return (
    <div className="site-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/term" element={<Term />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<ShopCategory />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
