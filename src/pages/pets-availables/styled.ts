import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${Colors.primary};
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 29px 0 32px 32px;

  h1 {
    font-family: Archivo, sans-serif;
    font-weight: 700;
    font-size: 1.875rem;
    color: ${Colors.titlePrimary};
  }
`;
