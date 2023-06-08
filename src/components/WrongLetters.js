// WrongLetters.js

/*
This file is responsible for displaying the letters that the user 
has guessed incorrectly.
*/

import React from 'react';
import styled from 'styled-components';

/*
The styled components below are used to style the WrongLetters component.
*/

const Message = styled.div`
	display: flex;
	font-family: 'Montserrat', sans-serif;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 1.5rem;
	flex-wrap: wrap;
	margin-top: 20px;
	border-top: 1px solid #ccc;
	padding-top: 20px;
	width: 30rem;
	margin: 0 auto;
	padding-left: 10px;
	padding-right: 10px;
`;

const StyledWrongLetters = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	color: red;
	font-family: 'Montserrat', sans-serif;
	font-size: 2rem;
	font-weight: bold;
	flex-wrap: wrap;
	margin: 0 auto;
	margin-top: 20px;
`;

/*
The component is meant to display the letters that the user has guessed 
incorrectly with a message above it.
*/

const WrongLetters = ({ wrongLetters }) => {
	return (
		<>
			<Message>
				When you enter a wrong letter it will be shown below:
			</Message>
			<StyledWrongLetters className="wrong-letters">
				{wrongLetters.map((letter, index) => (
					<span key={index}>{letter}</span>
				))}
			</StyledWrongLetters>
			<br />
		</>
	);
};

export default WrongLetters;
