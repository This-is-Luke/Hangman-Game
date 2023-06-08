//app.js
/*
This is the main component of the application. It is responsible for
rendering all of the other components and managing the state of the
application. Below we are importing all of the components that we
will be using in this application.
*/
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import words from './components/Words';
import LetterGrid from './components/LetterGrid';

/*
Here is the main function of the component. It contains all of the
state variables that are used to manage the state of the application.
*/

const App = () => {
  /*
  Here are the state variables that are used to manage the state of the
  application. The playable variable is used to determine whether or not
  the game is playable. The correctLetters variable is used to store the
  letters that the user has guessed correctly. The wrongLetters variable
  is used to store the letters that the user has guessed incorrectly. The
  selectedWord variable is used to store the word that the user is trying
  to guess. The gameResult variable is used to store the result of the
  game. The showNotification variable is used to determine whether or not
  to show the notification message.
  */
	const [playable, setPlayable] = useState(true);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [selectedWord, setSelectedWord] = useState('');
	const [gameResult, setGameResult] = useState(null);
	const [showNotification, setShowNotification] = useState(false);

  /*
  Here is the handleShowNotification function. It takes in a boolean value
  and sets the showNotification variable to that value.
  */

	const handleShowNotification = (value) => {
		setShowNotification(value);
	};

  /*
  Here is the handleLetterClick function. It takes in a letter and checks
  to see if the letter is in the selectedWord variable.
  */

	const handleLetterClick = (letter) => {
		if (playable) {
			if (selectedWord.includes(letter)) {
				if (!correctLetters.includes(letter)) {
					setCorrectLetters((currentLetters) => [
						...currentLetters,
						letter,
					]);
				} else {
					setShowNotification(true);
				}
			} else {
				if (!wrongLetters.includes(letter)) {
					setWrongLetters((currentLetters) => [...currentLetters, letter]);
				} else {
					setShowNotification(true);
				}
			}
		}
	};

  /*
  here is the useEffect hook. It is used to select a random word from the
  words array and set it to the selectedWord variable.
  */

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * words.length);
		setSelectedWord(words[randomIndex]);
	}, []);

  /*
  here is another useEffect hook. It is used to check if the user has won
  or lost the game.
  */
  
	useEffect(() => {
		const checkWin = () => {
			if (
				selectedWord &&
				selectedWord
					.split('')
					.every((letter) => correctLetters.includes(letter))
			) {
				setPlayable(false);
				setGameResult('win');
			} else if (wrongLetters.length === 7) {
				setPlayable(false);
				setGameResult('lose');
			}
		};

		if (selectedWord) {
			checkWin();
		}
	}, [correctLetters, wrongLetters, selectedWord.length, selectedWord]);

  /*
  Here is the resetGame function. It is used to reset the state of the
  application to its initial state.
  */

	const resetGame = () => {
		setPlayable(true);
		setCorrectLetters([]);
		setWrongLetters([]);
		const randomIndex = Math.floor(Math.random() * words.length);
		setSelectedWord(words[randomIndex]);
		setGameResult(null);
	};

  /*
  Here is the return statement. It is used to render all of the components
  that are used in this application.
  */

	return (
		<>
			<Header resetGame={resetGame} />{' '}
			<Figure
				wrongLetters={wrongLetters}
				wrongLettersCount={wrongLetters.length}
			/>
			<Word selectedWord={selectedWord} correctLetters={correctLetters} />
			<WrongLetters wrongLetters={wrongLetters} />
      <Notification
				showNotification={showNotification}
				handleShowNotification={handleShowNotification}
			/>

			<LetterGrid onClickLetter={handleLetterClick} />
			<Popup
				playable={playable}
				gameResult={gameResult}
				resetGame={resetGame}
				selectedWord={selectedWord}
			/>
		</>
	);
};

export default App;
