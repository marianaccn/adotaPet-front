import React from 'react';
import { BaseButton, BaseInput, BaseLabel, InputContainer } from '../styled';
import { Container } from './styled';

export const Step1 = ({ form, setForm, changeStep }) => {
  return (
    <Container>
      <BaseLabel>
        Estamos super animados com sua iniciativa! <br />
        Nos diga seu nome completo e idade para iniciar com o processo de
        adoção!
      </BaseLabel>
      <InputContainer>
        <BaseInput
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          name="name"
          autoComplete="off"
          placeholder="Nome Completo"
        />
        <BaseInput
          id="age"
          value={form.age}
          onChange={(e) => {
            const age = e.target.value;
            let hasMinor = false;
            if (age < 18) hasMinor = true;
            setForm({ ...form, age, hasMinor });
          }}
          name="age"
          autoComplete="off"
          placeholder="Idade"
        />
      </InputContainer>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          changeStep(2);
        }}
      >
        Next <span>&#62;</span>
      </BaseButton>
    </Container>
  );
};
