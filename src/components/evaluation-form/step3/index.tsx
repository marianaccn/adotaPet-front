import React from 'react';
import { BaseButton, BaseInput, BaseLabel, InputContainer } from '../styled';
import { Container } from './styled';

export const Step3 = ({ form, setForm, changeStep }) => {
  return (
    <Container>
      <BaseLabel>
        Gostariamos de saber mais sobre o futuro lar do nosso bixinho. <br />
        Nos fale um pouco sobre as pessoas que moram com você!
      </BaseLabel>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          setForm({
            ...form,
            peopleWithMe: [...form.peopleWithMe, { name: '', age: '' }],
          });
        }}
      >
        Adicionar membro <span>+</span>
      </BaseButton>
      {form.peopleWithMe.map((_, index) => (
        <InputContainer key={index}>
          <BaseInput
            value={form.peopleWithMe[index].name}
            onChange={(e) => {
              const changedPeopleWithMe = [...form.peopleWithMe];
              changedPeopleWithMe[index].name = e.target.value;
              setForm({
                ...form,
                peopleWithMe: [...changedPeopleWithMe],
              });
            }}
            autoComplete="off"
            placeholder="Nome"
          />
          <BaseInput
            value={form.peopleWithMe[index].age}
            onChange={(e) => {
              const changedPeopleWithMe = [...form.peopleWithMe];
              changedPeopleWithMe[index].age = e.target.value;
              setForm({
                ...form,
                peopleWithMe: [...changedPeopleWithMe],
              });
            }}
            autoComplete="off"
            placeholder="Idade"
          />
        </InputContainer>
      ))}

      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          const hasMinors = form.peopleWithMe.filter(
            (people) => people.age < 18
          ).length;
          if (hasMinors > 0 || form.hasMinor) {
            setForm({ ...form, hasMinors: true });
            changeStep(4);
          } else {
            changeStep(5);
          }
        }}
      >
        Next <span>&#62;</span>
      </BaseButton>
    </Container>
  );
};
