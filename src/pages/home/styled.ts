import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${Colors.primary};
  color: ${Colors.titlePrimary};
  height: 100vh;
  width: 100vw;

  h1 {
    font-weight: 400;
    font-family: Poppins, sans-serif;
    font-size: 1.25rem;
    line-height: 1.875rem;
    margin-top: 4.5rem;
    color: ${Colors.titlePrimary};
  }

  h2 {
    font-weight: 600;
    font-family: Poppins, sans-serif;
    font-size: 1.25rem;
    line-height: 1.875rem;
    margin-top: 0.8rem;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  background-color: ${Colors.primary};
  width: 97vw;

  img {
    height: 3.6rem;
  }
`;

export const AdotaPetImage = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 34%;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    display: none;
    font-family: Lalezar, sans-serif;
    font-size: 96px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    color: ${Colors.titlePrimary};
  }

  h2 {
    display: none;
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.6rem;
  }
`;

export const MobileTextContainer = styled.div`
  background-color: ${Colors.primary};
  color: ${Colors.titlePrimary};
  margin: 0 115px 0 61px;

  h1 {
    font-weight: 400;
    font-family: Poppins, sans-serif;
    font-size: 1.25rem;
    line-height: 1.875rem;
    margin-top: 4.5rem;
    color: ${Colors.titlePrimary};
  }

  h2 {
    font-weight: 600;
    font-family: Poppins, sans-serif;
    font-size: 1.25rem;
    line-height: 1.875rem;
    margin-top: 0.8rem;
    white-space: nowrap;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 4.0625rem 0;

  a {
    width: 30rem;

    display: flex;
    justify-content: space-around;
    align-items: center;

    color: ${Colors.buttonText};

    img {
      width: 83%;
    }
  }
`;
