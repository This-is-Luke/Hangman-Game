import React from 'react';
import styled from 'styled-components';

const StyledFigure = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin: 0 auto;
  width: 30rem;
`;

const Figure = ({ wrongLettersCount }) => {
  const getImage = () => {
    switch (wrongLettersCount) {
      case 0:
        return `${process.env.PUBLIC_URL}/images/blank.png`;
      case 1:
        return `${process.env.PUBLIC_URL}/images/pole.png`;
      case 2:
        return `${process.env.PUBLIC_URL}/images/head.png`;
      case 3:
        return `${process.env.PUBLIC_URL}/images/body.png`;
      case 4:
        return `${process.env.PUBLIC_URL}/images/left-arm.png`;
      case 5:
        return `${process.env.PUBLIC_URL}/images/right-arm.png`;
      case 6:
        return `${process.env.PUBLIC_URL}/images/left-leg.png`;
      case 7:
        return `${process.env.PUBLIC_URL}/images/right-leg.png`;
      default:
        return null;
    }
  };

  return (
    <StyledFigure className="figure-container">
      <img src={getImage()} alt="Hangman stage" />
    </StyledFigure>
  );
};
  
export default Figure;
