import styled from 'styled-components';

export const RulesButton = styled.button`
  padding: 10px 20px;
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-family: 'Bree Serif', serif;
  transition: background-color 0.2s;

  &:hover {
    background-color: #00c9b7;
  }
`;

export const RulesPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const RulesImage = styled.img`
  width: 100%;
  max-width: 400px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  font-size: 24px;
`;
