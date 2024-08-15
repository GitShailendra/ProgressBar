import React, { useState } from 'react';
import './ProgressBar.css'
const ProgressBar = () => {
  const [value, setValue] = useState(50); 
  const [history, setHistory] = useState([0]); 
  const [currentValueIndex, setCurrentValueIndex] = useState(0);

  const incrementValue = () => {
    const newValue = Math.min(value + 1, 150);
    setValue(newValue);
    setHistory([...history.slice(0, currentValueIndex + 1), newValue]);
    setCurrentValueIndex(history.length);
  };

  const decrementValue = () => {
    const newValue = Math.max(value - 1, 0);
    setValue(newValue);
    setHistory([...history.slice(0, currentValueIndex + 1), newValue]);
    setCurrentValueIndex(history.length);
  };

  const undo = () => {
    if (currentValueIndex > 0) {
      setCurrentValueIndex(currentValueIndex - 1);
      setValue(history[currentValueIndex - 1]);
    }
  };

  const redo = () => {
    if (currentValueIndex < history.length - 1) {
      setCurrentValueIndex(currentValueIndex + 1);
      setValue(history[currentValueIndex + 1]);
    }
  };

  return (
    <div className="progress-container">
      <button className='button' onClick={decrementValue}>-</button>
      <div className="progress" style={{ width: `${value}%` }}></div>
      <button className='button' onClick={incrementValue}>+</button>
      <button className='button' onClick={undo}>Undo</button>
      <button  className='button'onClick={redo}>Redo</button>
    </div>
  );
};

export default ProgressBar;
