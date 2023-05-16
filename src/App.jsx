import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import StudyCase from './pages/StudyCase';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/works" element={<Works />} />
            <Route path="/works/:clientName" element={<StudyCase />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default function AppWithDarkMode() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}
