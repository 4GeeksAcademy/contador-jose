import React from "react";
import ReactDOM from 'react-dom/client'
import {Control} from './control.jsx'

export const App = (props) => {

            return (
                <h1 className= "container-fluid">
                    <p>{props.count}</p>
                 
                <Control
                    onStart={props.onStart}
                    onStop={props.onStop}
                    onReset={props.onReset}
                />
                
                {props.count >= 10 && (
                <button 
                    onClick={() => alert('Time is overing')} 
                    style={{ backgroundColor: 'red', color: 'white' }}
                >
                    Alert
                </button>
            )}
                </h1>
    );
};


                 


          

