// Word.js
import React from 'react';
import Styled from 'styled-components';

const StyledWord = Styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  font-size: 2rem;
  margin: 0 auto;
  width: 30rem;
  padding-bottom: 60px;
  padding-left: 10px;
  padding-right: 10px;


  .letter {
    margin-right: 10px;
`; 

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <StyledWord className="word">
      {selectedWord.split('').map((letter, index) => (
        <span key={index} className="letter">
          {correctLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </StyledWord>
  );
};

export default Word;
