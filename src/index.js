import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Modal from "./modal"
import reportWebVitals from './reportWebVitals';



const App = () => {

    return(
        <>
            <Modal/>
        </>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);