import React from 'react';
import { BaseButton, BaseInput, BaseLabel, InputContainer } from '../styled';
import { Container } from './styled';

export const Step2 = ({ form, setForm, changeStep }) => {
  return (
    <Container>
      <BaseLabel>
        Agora precisamos de suas informacoes de contato. <br />
        Nos informe seu melhor email e seu numero do seu whats!
      </BaseLabel>
      <InputContainer>
        <BaseInput
          id="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          name="email"
          autoComplete="off"
          placeholder="Email"
        />
        <BaseInput
          id="phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          phone="phone"
          autoComplete="off"
          placeholder="Telefone"
        />
      </InputContainer>

      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          changeStep(3);
        }}
      >
        Next <span>&#62;</span>
      </BaseButton>
    </Container>
  );
};
