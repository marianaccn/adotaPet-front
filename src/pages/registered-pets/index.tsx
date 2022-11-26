import { useState } from 'react';
import Filter from '@components/filter';
import PetCard from '@components/pet-card';
import { ReturnButtonContainer } from '@components/return-button/styled';
import { NextPage } from 'next';
import {
  Container,
  Header,
  ContainerPets,
  TopHeader,
  NewPetButton,
} from './styled';

const PetsRegistered: NextPage = () => {
  const [gatos, setGatos] = useState(['Bartolomeu', 'Miuazinho']);

  return (
    <Container>
      <Header>
        <TopHeader>
          <ReturnButtonContainer>
            <a href="/">
              <img src="./images/return-icon.svg" alt="Botão de voltar" />
            </a>
          </ReturnButtonContainer>
          <a href="/pets-registration">
            <NewPetButton
              src="./images/register-pet-button.svg"
              alt="Botão para cadastrar animal"
            ></NewPetButton>
          </a>
        </TopHeader>

        <h1 onClick={() => setGatos(['bartolomeu', 'miauzinho'])}>
          Animaizinhos<br></br> cadastrados
        </h1>
        <Filter />
      </Header>
      <ContainerPets>
        {gatos.map((e) => (
          <PetCard name={e} />
        ))}
      </ContainerPets>
    </Container>
  );
};

export default PetsRegistered;
