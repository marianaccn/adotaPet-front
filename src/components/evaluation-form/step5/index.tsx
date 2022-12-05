import React from 'react';
import { BaseButton, BaseLabel } from '../styled';
import { Container } from './styled';

export const Step5 = ({ form, setForm, changeStep }) => {
  return (
    <Container>
      <BaseLabel>
        Agora sobre sua residencia.
        <br />
        Você reside numa casa, ou num apartamento?
      </BaseLabel>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          setForm({ ...form, houseType: 'casa' });
          changeStep(6);
        }}
      >
        Casa
      </BaseButton>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          setForm({ ...form, houseType: 'apartamento' });
          changeStep(6);
        }}
      >
        Apartamento
      </BaseButton>
    </Container>
  );
};
