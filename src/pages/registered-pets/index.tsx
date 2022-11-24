import { useState } from 'react';
import Filter from '@components/filter';
import PetCard from '@components/pet-card';
import { ReturnButtonContainer } from '@components/return-button/styled';
import { NextPage } from 'next';
import { Container, Header, ContainerPets, TopHeader } from './styled';

const PetsRegistered: NextPage = () => {
  const [gatos, setGatos] = useState(['bartolomeu', 'miuazinho']);

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
            <img
              src="./images/register-pet-button.svg"
              alt="Botão para cadastrar animal"
            />
          </a>
        </TopHeader>

        <h1 onClick={() => setGatos(['bartolomeu', 'miauzinho'])}>
          Animaizinhos<br></br> cadastrados
        </h1>
        <Filter></Filter>
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
