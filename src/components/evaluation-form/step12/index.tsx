import React from 'react';
import { BaseButton, BaseLabel } from '../styled';
import { Container } from './styled';

export const Step12 = ({ changeStep, submit }) => {
  return (
    <Container>
      <BaseLabel>
        Menores de idade necessitam da autorização de responsáveis para realizar
        o processo de adoção.
      </BaseLabel>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        Possuo autorização de meus guardiões legais.
      </BaseButton>
    </Container>
  );
};
