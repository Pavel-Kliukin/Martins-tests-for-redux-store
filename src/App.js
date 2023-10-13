import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import List from './components/List';
import StoreNavbar from './components/StoreNavbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <StoreNavbar />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
