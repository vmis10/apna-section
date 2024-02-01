import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainLayout from './MainLayout';
import Signup from './components/Signup';
import JointInspDates from './components/JointInspDates';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Signup />} />
            <Route path="getinspdates" element={<JointInspDates />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;   