import React from 'react';
import { BaseButton, BaseLabel } from '../styled';
import { Container } from './styled';

export const Step9 = ({ form, setForm, changeStep }) => {
  return (
    <Container>
      <BaseLabel>O animal terá acesso a rua?</BaseLabel>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          setForm({ ...form, hasStreetAccess: true });
          changeStep(10);
        }}
      >
        Sim
      </BaseButton>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          setForm({ ...form, hasStreetAccess: false });
          changeStep(10);
        }}
      >
        Não
      </BaseButton>
    </Container>
  );
};
