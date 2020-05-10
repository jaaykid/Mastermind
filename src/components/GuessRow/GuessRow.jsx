import React from "react";
import GuessScore from "../GuessScore/GuessScore";
import GuessPegs from "../GuessPegs/GuessPegs";

const GuessRow = () => (
  <div className='flex-h'>
    Guess Row #
    <GuessPegs />
    <GuessScore />
  </div>
);

export default GuessRow;
