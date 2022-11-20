import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${Colors.background};
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.primary};
  width: 100vw;

  h1 {
    margin: 3.375rem 0 2.75rem 2rem;
    font-family: Archivo, sans-serif;
    font-weight: 700;
    font-size: 1.875rem;
    color: ${Colors.titlePrimary};
  }
`;

export const ContainerPets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 0;
`;
