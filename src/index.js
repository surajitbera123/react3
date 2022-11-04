import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Data from './data,json';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  name={Data[0].name} address={Data[0].address} />
    <App  name={Data[1].name} address={Data[1].address} />
    <App  name={Data[2].name} address={Data[2].address} />
    <App  name={Data[3].name} address={Data[3].address} />
  </React.StrictMode>
);
