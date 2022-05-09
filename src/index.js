import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Price from './pages/Price/Price';
import Delivery from './pages/Delivery/Delivery';
import Faq from './pages/Faq/Faq';
import Contacts from './pages/Contacts/Contacts';
import Loyalty from './pages/Loyalty/Loyalty';
import Certificate from './pages/Certificate/Certificate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
        <Route path="/payment-and-delivery" element={<Delivery />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/loyalty" element={<Loyalty />} />
        <Route path="/certificate" element={<Certificate />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
