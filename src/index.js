import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Price from './components/pages/Price/Price';
import Delivery from './components/pages/Delivery/Delivery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
        <Route path="/payment-and-delivery" element={<Delivery />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
