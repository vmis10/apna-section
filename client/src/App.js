import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainLayout from './MainLayout';
import Home from './components/Home';
import Positions from './components/Positions';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/positions" element={<Positions />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;   