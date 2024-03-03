import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainLayout from './MainLayout';
import MainNavbar from './components/MainNavBar';
import ExternalLinks from './components/ExternalLinks';
import Footer from './components/Footer';
import Signup from './components/Signup';
import MaintCircular from './components/MaintCircular';
import Login from './components/Login';
import JointInspDates from './components/JointInspDates';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavbar/>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/maintCircular" element={<MaintCircular />} />
            <Route path="/getinspdates" element={<JointInspDates />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/externallinks" element={<ExternalLinks />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;   