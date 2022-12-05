import React from 'react';
import { BaseButton, BaseInput, BaseLabel } from '../styled';
import { Container } from './styled';

export const Step4 = ({ form, setForm, changeStep }) => {
  return (
    <Container>
      <BaseLabel>
        Lidar com animais pode ser uma tarefa complicada que muitas vezes se
        exige atenção e cuidados especiais.
        <br />
        Os maiores de idade já tiveram alguma experiencia com adaptação de
        crianças com animais?
      </BaseLabel>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          setForm({ ...form, experienceWithMinors: true });
          changeStep(5);
        }}
      >
        Sim
      </BaseButton>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          setForm({ ...form, experienceWithMinors: false });
          changeStep(5);
        }}
      >
        Não
      </BaseButton>
    </Container>
  );
};
