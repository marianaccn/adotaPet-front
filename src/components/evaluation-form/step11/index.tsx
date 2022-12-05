import React from 'react';
import { BaseButton, BaseLabel } from '../styled';
import { Container } from './styled';

export const Step11 = ({ form, changeStep, submit }) => {
  return (
    <Container>
      <BaseLabel>
        Ao continuar você concorda em realizar o processo de pós adoção, onde
        caso o animal não se adapte, ele retornará à ONG e não à rua.
      </BaseLabel>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          if (form.age >= 18) {
            submit();
          } else {
            changeStep(12);
          }
        }}
      >
        Sim, estamos todos cientes.
      </BaseButton>
    </Container>
  );
};
