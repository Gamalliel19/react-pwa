import React from 'react';
import Arrive from './components/Arrive';
import Browse from './components/Browse';
import Client from './components/Client';
import Footer from './components/Footer';
import Header from './components/Header'
import Hero from './components/Hero';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Browse />
      <Arrive />
      <Client />
      <SideMenu />
      <Footer />
    </div>
  );
}

export default App;
