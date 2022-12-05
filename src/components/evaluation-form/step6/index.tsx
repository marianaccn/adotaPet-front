import React from 'react';
import { BaseButton, BaseInput, BaseLabel, InputContainer } from '../styled';
import { Container } from './styled';

export const Step6 = ({ form, setForm, changeStep }) => {
  return (
    <Container>
      <BaseLabel>
        Onde você mora? <br />
        Precisamos do seu endereço.
      </BaseLabel>
      <BaseInput
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        name="address"
        autoComplete="off"
        placeholder="Endereço"
      />
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          changeStep(7);
        }}
      >
        Next <span>&#62;</span>
      </BaseButton>
    </Container>
  );
};
