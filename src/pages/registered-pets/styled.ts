import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${Colors.background};
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

export const Header = styled.div`
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: column;
  width: 100vw;

  h1 {
    color: ${Colors.titlePrimary};
    font-family: Archivo, sans-serif;
    font-size: 30px;
    font-weight: 700;
    margin: 54px 0 44px 32px;
  }

  @media (min-width: 699px) {
    h1 {
      font-size: 36px;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 50px;
    h1 {
      font-size: 40px;
      letter-spacing: 1px;
    }
  }
`;

export const TopHeader = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
`;

export const NewPetButton = styled.img`
  @media (min-width: 699px) {
    width: 180px;
    height: 66px;
  }

  @media (min-width: 1024px) {
    width: 200px;
  }
`;

export const ContainerPets = styled.div`
  align-items: center;
  background-color: ${Colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0 0;
`;
