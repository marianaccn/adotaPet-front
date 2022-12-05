import React from 'react';
import { BaseButton, BaseLabel } from '../styled';
import { Container } from './styled';

export const Step8 = ({ form, setForm, changeStep }) => {
  return (
    <Container>
      <BaseLabel>Sua residencia é telada?</BaseLabel>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          setForm({ ...form, nettedWindows: true });
          changeStep(10);
        }}
      >
        Sim
      </BaseButton>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          setForm({ ...form, nettedWindows: false });
          changeStep(9);
        }}
      >
        Não
      </BaseButton>
    </Container>
  );
};
