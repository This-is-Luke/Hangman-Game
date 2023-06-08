// popup.js
/* 
This is the Popup component, it is intended to display a popup message to the user
based on the result of the game.
*/
import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

/*
the styled component below is used to style the Popup component.
*/

const PopupContainer = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props['data-show'] ? 'flex' : 'none')};
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

/*
This takes in a few props:
- playable: a boolean value that indicates whether the game is playable or not.
- gameResult: a string value that indicates the result of the game.
- resetGame: a function that resets the game.
- selectedWord: a string value that represents the word that was selected for the game.
*/

const Popup = ({ playable, gameResult, resetGame, selectedWord }) => {
  // display is a boolean value that indicates whether the popup should be displayed or not.
	const [display, setDisplay] = useState(false);
  // useEffect is used to update the display value based on the gameResult value.
	useEffect(() => {
		if (gameResult !== null) {
			setDisplay(true);
		} else {
			setDisplay(false);
		}
	}, [gameResult]);
  // message is a string value that is displayed to the user based on the gameResult value.
	const message =
		gameResult === 'win'
			? 'Congratulations! You won!'
			: gameResult === 'lose'
			? 'You Killed The Hangman!.'
			: '';
  // this is the word that was selected for the game.
	const wordMessage = `The word was: ${selectedWord}`;
  // this returns the JSX for the Popup component.
	return (
		<PopupContainer data-show={display}>
			<div className="popup">
				<h2>{message}</h2>
				{!playable && <p>{wordMessage}</p>}
				<button onClick={resetGame}>Play Again</button>
			</div>
		</PopupContainer>
	);
};

export default Popup;
