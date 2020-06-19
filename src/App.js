import React, { useEffect } from 'react';
import gsap, { Back } from 'gsap'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/app.scss'
import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import Cart from './components/Cart';
import ItemDetails from './components/ItemDetails';

function App() {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const tl = gsap.timeline()
    tl.from('.header', 1.1, {
      y: -150,
      ease: Back.easeOut
    })
    tl.from('.link', 1.3, {
      opacity: 0,
      x: 70,
      ease: 'Power3.easeOut',
      stagger: {
        amount: 0.4
      }
    })
  }, [])
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path=':id' exact element={<ItemDetails />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/cart' exact element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
