import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${Colors.primary};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  background-color: ${Colors.primary};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin: 67px 0 0 0;

  @media (min-width: 699px) {
    margin: 77px 0 0 0;
  }

  @media (min-width: 1024px) {
    margin: 0 0 0 0;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  background-color: ${Colors.primary};
  display: flex;
  justify-content: center;
  margin: 0 0 78px;

  h1 {
    font-family: Archivo, sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 2.3125rem;
    color: ${Colors.titlePrimary};
  }

  @media (min-width: 699px) {
    margin: 0 0 98px;

    h1 {
      font-size: 35px;
    }
  }

  @media (min-width: 1800px) {
    margin: 0 0 100px;

    h1 {
      font-size: 45px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const LoginInput = styled.input`
  background-color: ${Colors.lineWhite};
  border-radius: 8px;
  border: none;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 48px;
  margin-bottom: 67px;
  width: 299px;
  padding-left: 14px;

  ::-webkit-input-placeholder {
    color: ${Colors.smallInfo};
  }

  @media (min-width: 699px) {
    width: 399px;
  }

  @media (min-width: 1800px) {
    width: 599px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 50px;
  }

  @media (min-width: 699px) {
    img {
      height: 55px;
    }
  }
`;
