//lettergrid.js
/*
This is the LetterGrid component, it is intended to display a grid of letters
that the user can click on to guess the word.
*/
import React from 'react';
import styled from 'styled-components';

/*
The styled components below are used to style the LetterGrid component.
*/

const LetterGridWrapper = styled.div`
  display: grid;
  background-color: #919191;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  margin: 0 auto;
  width: 30rem;
  border-radius: 2rem;
  margin-top: 30px;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
`;

const LetterButton = styled.button`
  padding: 8px;
  font-size: 18px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

/*
This function is used to create the LetterGrid component.
It sets up a grid of letters that the user can click on to guess the word.
*/

const LetterGrid = ({ onClickLetter }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <LetterGridWrapper>
      {alphabet.split('').map((letter, index) => (
        <LetterButton key={index} onClick={() => onClickLetter(letter)}>
          {letter}
        </LetterButton>
      ))}
    </LetterGridWrapper>
  );
};

export default LetterGrid;
