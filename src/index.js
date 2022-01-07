import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import APexOption from './scripts/ApexOption';
import MainShow from './pages/Routes';

ReactDOM.render(
  <React.StrictMode>
    <APexOption>
      <MainShow />
    </APexOption>
  </React.StrictMode>,
  document.getElementById('root')
);
