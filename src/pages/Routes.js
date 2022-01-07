import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Apex from './apex/Apex';

const MainShow = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/apex' element={<Apex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainShow;
