import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Achievements/>
      <Contact/>
    </div>
  );
}

export default App;
