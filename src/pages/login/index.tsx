import { useState } from 'react';
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
import { LoginService } from '@services/user';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const token = await LoginService(email, password);
    if (token) {
      sessionStorage.setItem('token', token.toString());
      window.location.href = '/pets';
    } else {
      alert('Email ou email incoretos');
    }
  };

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
          <LoginInput
            type="text"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginInput
            type="password"
            placeholder="Senha"
            name="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <ButtonContainer>
          <a onClick={() => login()}>
            <img src="./images/login-button.svg" alt="Botao de login" />
          </a>
        </ButtonContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
