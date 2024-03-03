import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function MainLayout () {
  const auth = localStorage.getItem("token");
  return (
    auth ? <Outlet/>:<Navigate to="/login"/>
  )
}

export default MainLayout;