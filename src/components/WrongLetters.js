// WrongLetters.js
import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
	display: flex;
	font-family: 'Montserrat', sans-serif;
	justify-content: center;
	align-items: center;
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
	font-family: 'Montserrat', sans-serif;
	font-size: 2rem;
	flex-wrap: wrap;
	margin: 0 auto;

	margin-top: 20px;
`;

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
