import React from 'react';
import './SettingsPage.css';
import { Link } from 'react-router-dom';

const SettingsPage = (props) => {
  const selectedLevelStyle = {
    border: '2px solid #333',
  };

  let handleDifficultyChange = (level) => {
    props.handleDifficultyChange(level);
    props.history.push('/');
  };

  const colorKeys = Object.keys(props.colors);

  const levels = colorKeys.map((level) => (
    <div className='difficulty-level-row' key={level}>
      <button
        className='difficulty-level-btn btn btn-default'
        style={level === props.difficulty ? selectedLevelStyle : null}
        disabled={level === props.difficulty}
        onClick={() => handleDifficultyChange(level)}>
        {level}
      </button>
      <div className='difficulty-level-colors'>
        {props.colors[level].map((color) => (
          <div className='difficulty-color' style={{ backgroundColor: color }} key={color} />
        ))}
      </div>
    </div>
  ));

  return (
    <div className='settings'>
      <header className='header'>Set Difficulty Level</header>
      <div>{levels}</div>
      <div>
        <Link className='settings-cancel btn btn-default btn-sm' to='/'>
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default SettingsPage;
