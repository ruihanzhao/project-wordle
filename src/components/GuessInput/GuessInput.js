import React from "react";

function GuessInput({ onSubmitGuess, disabled }) {
  const [currGuess, setCurrGuess] = React.useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitGuess(currGuess);
        console.log("currGuess", currGuess);
        setCurrGuess("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        id="guess-input"
        type="text"
        value={currGuess}
        onChange={(event) => setCurrGuess(event.target.value.toUpperCase())}
        pattern="^[a-zA-Z]{5}$"
        title="Please enter a 5 letter word."
      />
    </form>
  );
}

export default GuessInput;
