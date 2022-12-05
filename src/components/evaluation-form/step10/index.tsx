import React from 'react';
import { BaseButton, BaseInput, BaseLabel } from '../styled';
import { Container } from './styled';

export const Step10 = ({ changeStep }) => {
  return (
    <Container>
      <BaseLabel>
        Ao continuar você estará afirmando que todos os membros da sua
        residencia estão cientes da adoção.
      </BaseLabel>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          changeStep(11);
        }}
      >
        Sim, estamos todos cientes.
      </BaseButton>
    </Container>
  );
};
