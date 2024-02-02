import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import MainNavbar from './components/MainNavbar';

function MainLayout () {
  const auth = localStorage.getItem("user");
  return (
    auth ? 
    <>
      <MainNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout;