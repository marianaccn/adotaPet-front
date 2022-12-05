import React from 'react';
import { BaseButton, BaseInput, BaseLabel } from '../styled';
import { Container } from './styled';

export const Step7 = ({ form, setForm, changeStep }) => {
  return (
    <Container>
      <BaseLabel>
        Ao continuar você estará afirmando que está ciente que o animal adotado
        passará por um periodo de adaptação.
        <br />E confirmará ter condições de fornecer alimento e cuidados médicos
        ao mesmo.
      </BaseLabel>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          changeStep(8);
        }}
      >
        Sim, estou ciente e confirmo.
      </BaseButton>
    </Container>
  );
};
