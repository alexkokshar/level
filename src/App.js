import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import Header from './components/layouts/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <main className="main">
          <Outlet />
        </main>
        <footer>Foooter</footer>
      </div>
    </>
  );
}

export default App;
