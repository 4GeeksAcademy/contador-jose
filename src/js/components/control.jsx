import React from "react";
import ReactDOM from 'react-dom/client'

export const Control = (props) => {
  return (
    <div className="d-flex justify-content-center gap-3 mt-3">
      <button className="btn btn-success" onClick={props.onStart}>
        Start
      </button>

      <button className="btn btn-danger" onClick={props.onStop}>
        Stop
      </button>

      <button className="btn btn-warning" onClick={props.onReset}>
        Restart
      </button>
    </div>
  );
};