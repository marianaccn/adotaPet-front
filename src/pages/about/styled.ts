import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${Colors.primary};
  color: ${Colors.titlePrimary};
  height: 100vh;
  width: 100vw;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  padding: 152px 10px 50px 40px;
  background-color: ${Colors.primary};

  h1 {
    font-family: Archivo, sans-serif;
    font-size: 32px;
    font-weight: 700;
    text-align: left;
    color: ${Colors.titlePrimary};
    margin-bottom: 50px;
  }

  h2 {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 40px;
    text-align: left;
    color: ${Colors.textPrimary};
    margin-right: 20px;
  }

  @media (min-width: 699px) {
    padding: 172px 10px 60px 50px;

    h1 {
      font-size: 42px;
    }

    h2 {
      font-size: 22px;
      line-height: 60px;
    }
  }

  @media (min-width: 1300px) {
    padding: 100px 100px 10px 100px;
  }

  @media (min-width: 1800px) {
    padding: 200px 150px 0px 150px;
  }
`;
