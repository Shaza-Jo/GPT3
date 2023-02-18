import React from 'react';
import "./App.css";
import { Brand, Cta, Navbar} from "./components";
import {Blog, Footer, Header, WhatGPT3, Possibilities, Features} from "./container";


function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibilities/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App