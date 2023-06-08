import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

const PopupContainer = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 10;

  .popup {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    text-align: center;

    h2 {
      margin-bottom: 20px;
    }

    button {
      background-color: #f54242;
      border: none;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      font-size: 1rem;
      padding: 10px 20px;
    }
  }
`;

const Popup = ({ playable, gameResult, resetGame, selectedWord }) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (gameResult !== null) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [gameResult]);

  const message =
    gameResult === 'win'
      ? 'Congratulations! You won!'
      : gameResult === 'lose'
      ? 'You Killed The Hangman!.'
      : '';

  const wordMessage = `The word was: ${selectedWord}`;

  return (
    <PopupContainer show={display}>
      <div className="popup">
        <h2>{message}</h2>
        {/* Add the word message here */}
        {!playable && <p>{wordMessage}</p>}
        <button onClick={resetGame}>Play Again</button>
      </div>
    </PopupContainer>
  );
};

export default Popup;
