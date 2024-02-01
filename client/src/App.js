import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainLayout from './MainLayout';
import Login from './components/Login';
import JointInspDates from './components/JointInspDates';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Login />} />
            <Route path="getinspdates" element={<JointInspDates />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;   