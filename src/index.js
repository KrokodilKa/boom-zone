import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import ModalController from "./modalController"



const App = () => {

    return(
        <>
            <ModalController/>
        </>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);