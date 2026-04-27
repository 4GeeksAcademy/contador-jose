import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import {App} from './components/app';
import {Button} from './components/button';

//ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
    // <App/>
 // </React.StrictMode>,
//)

let root = ReactDOM.createRoot(document.getElementById('root'));

let count = 0;
let intervalo = null;
let direction = 1; // 🔥 FALTA ESTO

const renderApp = () => {
    root.render(
        <App
            count={count}
            onStart={start}
            onStop={stop}
            onReset={reset}
        />
    );
};

const start = () => {
    if (intervalo) return;

    intervalo = setInterval(() => {

        count = count + direction;

        if (count === 15) {
            direction = -1;
        }

        if (count === 0) {
            direction = 1;
        }

        renderApp();

    }, 1000);
};

const stop = () => {
    clearInterval(intervalo);
    intervalo = null;
};

const reset = () => {
    count = 0;
    direction = 1; 
    renderApp();
};

renderApp();