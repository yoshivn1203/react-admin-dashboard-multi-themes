import React, { useEffect } from 'react';

import './layout.css';

import Sidebar from '../sidebar/Sidebar';
import TopNav from '../topnav/TopNav';
import MyRoutes from '../Routes';

import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setColorAction, setModeAction } from '../../features/themeSlice';

const Layout = () => {
  const themeReducer = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');

    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');

    dispatch(setModeAction(themeClass));

    dispatch(setColorAction(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
        <Sidebar />
        <div className='layout__content'>
          <TopNav />
          <div className='layout__content-main'>
            <MyRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
