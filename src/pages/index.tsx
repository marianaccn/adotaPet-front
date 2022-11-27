import { NextPage } from 'next';
import {
  AdotaPetImage,
  ButtonsContainer,
  Container,
  LoginButton,
  DesktopText,
  LogoContainer,
  MobileText,
} from './home/styled';

const Home: NextPage = () => {
  return (
    <Container>
      <LogoContainer>
        <DesktopText>
          <h1>Adota Pet</h1>
          <h2>
            Um jeito mais facil
            <br /> de buscar por um novo amigo
          </h2>
        </DesktopText>

        <AdotaPetImage src="/images/adota-pet-img.svg" alt="imagem AdotaPet" />

        <MobileText>
          <h1>Seja bem-vindo.</h1>
          <h2>O que deseja fazer?</h2>
        </MobileText>
      </LogoContainer>

      <ButtonsContainer>
        <a href="/about">
          <img src="./images/about-us-button.svg" alt="Sobre nos" />
        </a>
        <a href="/pets-availables">
          <img
            src="./images/pets-availabes-button.svg"
            alt="Animais disponiveis"
          />
        </a>
      </ButtonsContainer>
    </Container>
  );
};

export default Home;
