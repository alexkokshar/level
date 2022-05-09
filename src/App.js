import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import Modal from './components/UI/Modal/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <Header />
      <div className="content">
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default App;
