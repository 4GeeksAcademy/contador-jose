import React from "react";
import ReactDOM from 'react-dom/client'

export const Alert = (props) => {
  
  if (props.count >= 10) return null;

  return (
    <button 
      onClick={() => alert('Cuidado')}
      style={{ backgroundColor: 'red', color: 'white' }}
    >
      Alerta
    </button>
  );
};