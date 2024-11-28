import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ChoicesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const ChoiceButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
    animation: ${bounce} 1s;
  }
`;

export const ChoiceImage = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultText = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 10px;
  font-family: 'Bree Serif', serif;
`;

export const PlayAgainButton = styled.button`
  padding: 10px 20px;
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Bree Serif', serif;
  transition: background-color 0.2s;

  &:hover {
    background-color: #00c9b7;
  }
`;
