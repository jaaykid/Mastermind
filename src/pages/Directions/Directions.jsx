import React from 'react';
import './Directions.css';
import { Link } from 'react-router-dom';

const Directions = () => (
  <div>
    <h1 className='directions-header'>How to play</h1>
    <h3>
      The object of Mastermind is to guess a secret code consisting of a series of colored
      pegs. Each guess will result in feedback narrowing down the possibilities of the code. If
      you are given a fully black guess peg that means you have the correct color in the
      correct position. If the guess peg is colored on the outside that means you have the
      correct color but not in the right position.
    </h3>
    <div>
      <Link className='settings-cancel btn btn-default btn-sm' to='/'>
        Back to home
      </Link>
    </div>
  </div>
);

export default Directions;
