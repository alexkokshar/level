import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import Modal from './components/UI/Modal/Modal';

export const ModalContext = createContext(null);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        <Header />
        <div className="content">
          <main className="main">
            <Outlet />
          </main>
          <Footer />
        </div>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </ModalContext.Provider>
    </>
  );
}

export default App;
