import React, { useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";

import logo from '../assets/logo.jpg';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // 768, 992, 1200, 1400
    if (screenSize <= 1200) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }, [screenSize]);

  return (
    <div>
      <div id="sidebar" className={`btn-sidebar ${activeMenu ? "d-none" : "d-block"}`}>
        <div className="logo">
          <img src={logo} />
        </div>
        <a className="btn-sidebar d-block d-xl-none" onClick={() => setActiveMenu(!activeMenu)}><i className="bi bi-x-lg"></i></a>
        <ul className="nav nv-pills flex-column mb-auto">
          <li className="nav-item"><NavLink to="/" className="nav-link"><i className="bi bi-house"></i> Home</NavLink></li>
          <li className="nav-item"><NavLink to="/registration" className="nav-link"><i className="bi bi-pen"></i> Registration</NavLink></li>
          <li className="nav-item"><NavLink to="/student-record" className="nav-link"><i className="bi bi-file-text"></i> Student Record</NavLink></li>
          <li className="nav-item"><NavLink to="/college-service" className="nav-link"><i className="bi bi-people"></i> College Service</NavLink></li>
          <li className="nav-item"><NavLink to="/financial-service" className="nav-link"><i className="bi bi-wallet2"></i> Financial Service</NavLink></li>
          <li className="nav-item"><NavLink to="/profile" className="nav-link"><i className="bi bi-person-bounding-box"></i> Profile</NavLink></li>
        </ul>
      </div>
      <div className="d-none d-xl-block" style={{width: '240px'}}>
      </div>
    </div>
  )
}

export default Sidebar