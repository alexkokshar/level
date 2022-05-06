import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
