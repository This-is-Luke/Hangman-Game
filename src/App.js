import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import words from './components/Words';
import LetterGrid from './components/LetterGrid';

const App = () => {
	const [playable, setPlayable] = useState(true);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [selectedWord, setSelectedWord] = useState('');
	const [gameResult, setGameResult] = useState(null);
	const [showNotification, setShowNotification] = useState(false);

	const handleShowNotification = (value) => {
		setShowNotification(value);
	};

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

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * words.length);
		setSelectedWord(words[randomIndex]);
	}, []);

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

	const resetGame = () => {
		setPlayable(true);
		setCorrectLetters([]);
		setWrongLetters([]);
		const randomIndex = Math.floor(Math.random() * words.length);
		setSelectedWord(words[randomIndex]);
		setGameResult(null);
	};

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
