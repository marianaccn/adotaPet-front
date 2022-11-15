import { ReturnButtonContainer } from '@components/return-button/styled';
import { NextPage } from 'next';
import { Container, Header } from './styled';

const PetsAvailabes: NextPage = () => {
  return (
    <Container>
      <ReturnButtonContainer>
        <a href="/">
          <img src="./images/return-icon.svg" alt="Botão de voltar" />
        </a>
      </ReturnButtonContainer>
      <Header>
        <h1>
          Animaizinhos<br></br> disponíveis
        </h1>
      </Header>
    </Container>
  );
};

export default PetsAvailabes;
