import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${Colors.background};
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.div`
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: column;
  width: 100vw;

  h1 {
    color: ${Colors.titlePrimary};
    font-family: Archivo, sans-serif;
    font-size: 1.875rem;
    font-weight: 700;
    margin: 3.375rem 0 2.75rem 2rem;
  }
`;

export const TopHeader = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
`;

export const ContainerPets = styled.div`
  align-items: center;
  background-color: ${Colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0 0;
`;
