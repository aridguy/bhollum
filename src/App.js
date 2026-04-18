// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Contact from './routes/Contact';
import Faq from './routes/Faq';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('bhollumCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('bhollumCart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <Routes>
        <Route index element={<Home cart={cart} setCart={setCart} />} />
        <Route path="shop" element={<Shop cart={cart} setCart={setCart} />} />
        <Route path="contact" element={<Contact cart={cart} setCart={setCart} />} />
        <Route path="faq" element={<Faq cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;