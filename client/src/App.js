import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainLayout from './MainLayout';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import JointInspDates from './components/JointInspDates';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavbar/>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/getinspdates" element={<JointInspDates />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;   