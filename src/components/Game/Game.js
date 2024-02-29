import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList/GuessList";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [didWin, setDidWin] = React.useState(false);
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });
  console.info({ answer });

  const handleSetGuesses = (newGuess) => {
    const checkGuessRes = checkGuess(newGuess, answer);
    setGuesses([...guesses, { id: Math.random(), guess: checkGuessRes }]);
    if (newGuess === answer) {
      setDidWin(true);
    }
  };

  const onResetWord = () => {
    setAnswer(sample(WORDS));
    setDidWin(false);
    setGuesses([]);
  };
  return (
    <>
      {didWin && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{` ${guesses.length} ${
              guesses.length > 1 ? "guesses" : "guess"
            }`}</strong>
            .
          </p>
          <button onClick={onResetWord}>Restart</button>
        </div>
      )}
      {!didWin && guesses.length === 6 && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={onResetWord}>Restart</button>
        </div>
      )}
      <GuessList guesses={guesses} />
      <GuessInput
        onSubmitGuess={(newGuess) => handleSetGuesses(newGuess)}
        disabled={guesses.length === 6 || didWin}
      />
    </>
  );
}

export default Game;
