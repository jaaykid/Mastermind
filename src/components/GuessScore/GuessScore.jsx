import React from 'react';
import './GuessScore.css';

const GuessScore = ({ score }) => {
  const scores = (
    'P'.repeat(score.perfect) +
    'A'.repeat(score.almost) +
    'I'.repeat(4 - score.perfect - score.almost)
  ).split('');

  const pegStyles = {
    P: {
      borderColor: 'black',
      backgroundColor: 'black',
    },
    A: {
      borderColor: 'black',
      backgroundColor: 'white',
    },
    I: {
      borderColor: 'white',
      backgroundColor: 'lightgrey',
    },
  };
  return (
    <div className='GuessScore'>
      {scores.map((score, idx) => (
        <div className='base' key={idx} style={pegStyles[score]} />
      ))}
    </div>
  );
};
export default GuessScore;
