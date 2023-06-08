// Header.js
import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
	margin: 0 auto;
	padding-bottom: 20px;
	border-bottom: 1px solid #ccc;
	width: 30rem;

	.restart-button {
		background-color: #f54242;
		border: none;
		border-radius: 5px;
		color: #fff;
		cursor: pointer;
		font-size: 1rem;
		margin-top: 10px;
		padding: 10px 20px;
	}
	.help-button {
		background-color: #f54242;
		border: none;
		border-radius: 5px;
		color: #fff;
		cursor: pointer;
		font-size: 1rem;
		margin-top: 10px;
		padding: 10px 20px;
	}
`;
const HelpPopup = () => (
	<Popup
		trigger={<button className="help-button">Help</button>}
		position="center center"
		contentStyle={{ top: '50%', transform: 'translateY(+50%)' }}
	>
		<div>
			<h3>Hangman Game Rules</h3>
			<ul>
				<li>Click on the letters to guess the hidden word.</li>
				<li>Each incorrect guess adds a part to the hangman figure.</li>
				<li>
					If you guess the word before the hangman figure is completed, you
					win!
				</li>
				<li>
					If the hangman figure is completed, you lose after 7 wrong
					guesses.
				</li>
			</ul>
			<h3>Using This Interface</h3>
			<ul>
				<li>
					Click on the "Restart Game" button in the header to start a new
					game.
				</li>
				<li>
					Click on the "Help" button to view the game rules and
					instructions.
				</li>
			</ul>
		</div>
	</Popup>
);

const Header = ({ resetGame }) => (
	<StyledHeader>
		<h1>Hangman</h1>
		<p>Find the hidden word - Save the poor Hangman!</p>
		<button className="restart-button" onClick={resetGame}>
			Restart Game
		</button>
		<HelpPopup />
	</StyledHeader>
);

export default Header;
