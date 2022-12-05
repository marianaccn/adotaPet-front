import React from 'react';
import { ArrowContainer, Background, CloseButton, Container } from './styled';

export const Modal = ({ children, step, changeStep, limit }) => {
  return (
    <Background>
      <Container>
        <CloseButton src="/images/close.svg" onClick={() => changeStep(0)} />
        {children}
        <ArrowContainer>
          <img src="/images/arrow.svg" onClick={() => changeStep(step - 1)} />
          <img
            src="/images/arrow.svg"
            onClick={() => changeStep(step < limit ? step + 1 : 0)}
          />
        </ArrowContainer>
      </Container>
    </Background>
  );
};
