import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/customers' element={<Customers />} />
    </Routes>
  );
};

export default MyRoutes;
