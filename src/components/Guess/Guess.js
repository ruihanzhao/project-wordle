import React from "react";
import { range } from "../../utils";

function Guess({ guessId, guess = undefined }) {
  return guess ? (
    <p key={guessId} className="guess">
      {guess.map(({ letter, status }, index) => (
        <span key={`${guessId}-${index}`} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  ) : (
    <p key={guessId} className="guess">
      {range(5).map((index) => (
        <span key={`${guessId}-${index}`} className="cell"></span>
      ))}
    </p>
  );
}

export default Guess;
