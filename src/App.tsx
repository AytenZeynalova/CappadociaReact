import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CappadociaMain } from './pages/cappadociapage/cappadocia';
import { CappadociaHeader } from './pages/Header/Header';
import { CappadociaFooter } from './pages/Footer/Footer';




function App() {
  return (
    <div className="App">
        <CappadociaHeader/>
        <CappadociaMain/>
        <CappadociaFooter/>
        
    </div>
    
  );
}

export default App;
