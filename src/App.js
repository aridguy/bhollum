// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './styles/globals.css';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Contact from './routes/Contact';
import Faq from './routes/Faq';
// import Navbar from './components/Navbar';

function App() {
  return (

    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;