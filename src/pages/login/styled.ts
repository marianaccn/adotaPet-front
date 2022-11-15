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
`;

export const TextContainer = styled.div`
  background-color: ${Colors.primary};
  display: flex;
  justify-content: center;
  margin: 0 0 4.875rem;

  h1 {
    font-family: Archivo, sans-serif;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.3125rem;
    color: ${Colors.titlePrimary};
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
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 50px;
  }
`;
