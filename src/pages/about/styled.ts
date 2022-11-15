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
  margin: 152px 0px 50px 40px;

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
    line-height: 4.6rem;
    line-height: 26px;
    text-align: left;
    color: ${Colors.textPrimary};
    margin-right: 20px;
  }
`;
