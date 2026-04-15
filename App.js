import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <main>
        <h1>My E-Commerce Store</h1>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
