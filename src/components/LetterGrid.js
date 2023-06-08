import React from 'react';
import styled from 'styled-components';

const LetterGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  margin: 0 auto;
  width: 30rem;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
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
