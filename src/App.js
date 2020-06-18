import React, { useEffect } from 'react';
import gsap, { Back } from 'gsap'
import './styles/app.scss'
import Header from './components/Header'
import Banner from './components/Banner'
import Items from './components/Items';

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
      <Header />
      <Banner />
      <Items />
    </div>
  );
}

export default App;
