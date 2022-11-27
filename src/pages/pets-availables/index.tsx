import Filter from '@components/filter';
import { useState } from 'react';
import PetCard from '@components/pet-card';
import { ReturnButtonContainer } from '@components/return-button/styled';
import { NextPage } from 'next';
import { Container, Header, ContainerPets } from './styled';
interface IPetCardProps {
  name: string;
}

const PetsAvailabes: NextPage<IPetCardProps> = (props) => {
  const [gatos, setGatos] = useState(['Bartolomeu', 'Miauzinho']);

  return (
    <Container>
      <Header>
        <ReturnButtonContainer>
          <a href="/">
            <img src="./images/return-icon.svg" alt="Botão de voltar" />
          </a>
        </ReturnButtonContainer>

        <h1>
          Animaizinhos<br></br> disponíveis
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

export default PetsAvailabes;
