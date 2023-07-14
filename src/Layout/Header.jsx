import React, { useState } from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const Header = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div id="header">
      {/* { !activeMenu && (
        <a onClick={() => setActiveMenu(!activeMenu)}><i className="bi bi-list"></i></a>
      )} */}
      <a className="d-flex d-xl-none pt-1" href="#" onClick={() => setActiveMenu(!activeMenu)}><i className="bi bi-list"></i></a>
      <a className='btn ms-auto' href="#"><i className="bi bi-envelope"></i> Mail</a>
      <a className='btn' href="#"><i className="bi bi-calendar"></i> Calendar</a>
      <a className='btn' href="#"><i className="bi bi-hdd"></i> H drive</a>
      <a className='btn' href="#"><i className="bi bi-box-arrow-right"></i>Sign out</a>
    </div>
  )
}

export default Header