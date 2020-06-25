import React from 'react';
import './SettingsPage.css';
import { Link } from 'react-router-dom';

const SettingsPage = (props) => {
  return (
    <div>
      <Link to='/'>HOME</Link>
      <div className='flex-h'>
        <h1 className='settings-header'>Set Difficulty Level</h1>
      </div>
      <div className='btn-column'>
        <div className='row'>
          <button onClick={() => props.handleDifficultyClick('easy')}>Easy</button>
          {props.colors.easy.map((color) => (
            <span className='colors' style={{ backgroundColor: color }}></span>
          ))}
        </div>
        <div className='row'>
          <button onClick={() => props.handleDifficultyClick('medium')}>Medium</button>
          {props.colors.medium.map((color) => (
            <span className='colors' style={{ backgroundColor: color }}></span>
          ))}
        </div>
        <div className='row'>
          <button onClick={() => props.handleDifficultyClick('hard')}>Hard</button>
          {props.colors.hard.map((color) => (
            <span className='colors' style={{ backgroundColor: color }}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
