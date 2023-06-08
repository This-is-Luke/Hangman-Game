// Word.js
/*
This is the Word component, it is intended to display the word that the user
is trying to guess.
*/
import React from 'react';
import Styled from 'styled-components';

/*
the styled component below is used to style the Word component.
*/

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

/*
Here we create the Word component.
It displays the word that the user is trying to guess 
as a series of underscores.
*/

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
