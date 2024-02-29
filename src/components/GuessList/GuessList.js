import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, guess }) => (
        <Guess key={id} guessId={id} guess={guess} />
      ))}
      {range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((num) => (
        <Guess key={`blank-${num}`} guessId={`blank-${num}`} />
      ))}
    </div>
  );
}

export default GuessList;
