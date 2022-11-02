import React from 'react';

import Sidebar from '../sidebar/Sidebar';
import MyRoutes from '../Routes';

import { BrowserRouter } from 'react-router-dom';

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <Sidebar />
        <div className='layout__content'>
          <div className='layout__content-main'>
            <MyRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
