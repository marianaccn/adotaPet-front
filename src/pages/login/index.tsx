import { ReturnButtonContainer } from '@components/return-button/styled';
import { NextPage } from 'next';
import {
  ButtonContainer,
  Container,
  InputContainer,
  LoginContainer,
  LoginInput,
  TextContainer,
} from './styled';

const Login: NextPage = () => {
  return (
    <Container>
      <ReturnButtonContainer>
        <a href="/">
          <img src="./images/return-icon.svg" alt="Botão de voltar" />
        </a>
      </ReturnButtonContainer>
      <LoginContainer>
        <TextContainer>
          <h1>Seja bem vindo!</h1>
        </TextContainer>
        <InputContainer>
          <LoginInput type="text" placeholder="E-mail" name="email" />
          <LoginInput type="password" placeholder="Senha" name="senha" />
        </InputContainer>
        <ButtonContainer>
          <a href="/registered-pets">
            <img src="./images/login-button.svg" alt="Botao de login" />
          </a>
        </ButtonContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
