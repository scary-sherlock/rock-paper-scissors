import React from 'react';
import Popup from 'reactjs-popup';
import { RiCloseLine } from 'react-icons/ri';
import { RulesButton, RulesPopupContainer, RulesImage, CloseButton } from './styledComponents';

const Rules = () => (
  <Popup
    modal
    trigger={<RulesButton>Rules</RulesButton>}
    className="popup-content"
  >
    {close => (
      <RulesPopupContainer>
        <CloseButton onClick={close}>
          <RiCloseLine />
        </CloseButton>
        <RulesImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </RulesPopupContainer>
    )}
  </Popup>
);

export default Rules;
