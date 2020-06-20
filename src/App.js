import React, { useEffect } from 'react';
import gsap, { Back } from 'gsap'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/app.scss'
import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import Basket from './components/Basket';
import ItemDetails from './components/ItemDetails';

function App() {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const tl = gsap.timeline()
    tl.from('.header', 1.1, {
      y: -150,
      ease: Back.easeOut
    })
    tl.from('.link', 0.9, {
      opacity: 0,
      x: 70,
      ease: 'Power3.easeOut',
      stagger: {
        amount: 0.4
      }
    })
    tl.from('.shoe-cont', 0.9, {
      opacity: 0,
      y: 70,
      ease: Back.easeOut,
      stagger: 0.3
    })
    tl.from('.icon', 0.6, {
      opacity: 0,
      y: 70,
      ease: Back.easeOut,
      stagger: 0.3
    })
    tl.from('.c-icon', 0.6, {
      opacity: 0,
      y: 70,
      ease: Back.easeOut,
      stagger: 0.3
    })
    tl.from('.card', 0.7, {
      opacity: 0,
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
          <Route path='/basket' exact element={<Basket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
