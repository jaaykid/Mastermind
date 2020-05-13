import React from 'react';
import './GuessPeg.css';

const GuessPeg = (props) => {
  return <div className='peg' style={{ backgroundColor: props.color }} />;
};

export default GuessPeg;
