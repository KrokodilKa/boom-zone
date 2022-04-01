import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Modal from "./modal"



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