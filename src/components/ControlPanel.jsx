import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ onValidate, onSolve }) => {
  return (
    <div className="control-panel">
      <button onClick={onValidate}>Validate</button>
      <button onClick={onSolve}>Solve</button>
    </div>
  );
};

export default ControlPanel;
