import React, { useState, useEffect } from 'react'; import './App.css';
/*Locale and Libraries*/ import Home from './pages/Home'
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
