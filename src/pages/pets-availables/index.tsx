import Filter from '@components/filter';
import PetCard from '@components/pet-card';
import { ReturnButtonContainer } from '@components/return-button/styled';
import { NextPage } from 'next';
import { Container, Header, ContainerPets } from './styled';

const PetsAvailabes: NextPage = () => {
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
        <PetCard></PetCard>
      </ContainerPets>
    </Container>
  );
};

export default PetsAvailabes;
