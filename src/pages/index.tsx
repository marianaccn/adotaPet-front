import { NextPage } from 'next';
import {
  AdotaPetImage,
  ButtonsContainer,
  Container,
  LoginButton,
  MobileTextContainer,
  TextContainer,
} from './home/styled';

const Home: NextPage = () => {
  return (
    <Container>
      <LoginButton>
        <a href="/pets-availabes">
          <img src="./images/login-button.svg" alt="Botao de login" />
        </a>
      </LoginButton>
      <TextContainer>
        <h1>Adota Pet</h1>
        <h2>Um jeito mais facil de buscar por um novo amigo</h2>
      </TextContainer>
      <AdotaPetImage
        src="./images/adota-pet-img.svg"
        alt="imagem AdotaPet"
      ></AdotaPetImage>
      <MobileTextContainer>
        <h1>Seja bem-vindo.</h1>
        <h2>O que deseja fazer?</h2>
      </MobileTextContainer>
      <ButtonsContainer>
        <a href="/about">
          <img src="./images/about-us-button.svg" alt="Sobre nos" />
        </a>
        <a href="/pets-availabes">
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
