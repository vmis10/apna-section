import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

function MainNavbar () {
  const auth = localStorage.getItem("token");
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
    navigate('/login');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <button className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/externallinks">External Links</NavLink></li>
            {auth ? <>
              <li className="nav-item"><NavLink className="nav-link" to="/getinspdates">Inspection Dates</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" onClick={logout} to="/login">Log Out ({JSON.parse(localStorage.getItem("user")).emailid})</NavLink></li>
            </> : <>
              <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
            </>}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;