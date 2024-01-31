import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainLayout from './MainLayout';
import Home from './components/Home';
import GetInspDates from './components/GetInspDates';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/getinspdates" element={<GetInspDates />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;   