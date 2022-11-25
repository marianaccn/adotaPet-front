import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${Colors.primary};
  height: 100vh;
  width: 100vw;
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  background-color: ${Colors.primary};
  width: 97vw;

  img {
    height: 57.6px;
  }

  @media (min-width: 699px) {
    img {
      height: 60px;
    }
  }

  @media (min-width: 1024px) {
    img {
      height: 60px;
    }
  }

  @media (min-width: 1300px) {
    img {
      height: 80px;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-bottom: 2rem;

  @media (min-width: 699px) {
    display: flex;
    padding-bottom: 0;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 1% 0 5%;
  }

  @media (min-width: 1300px) {
    padding: 0 1% 0 7%;
  }
`;

export const DesktopText = styled.div`
  display: none;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-family: Lalezar, sans-serif;
    font-size: 96px;
    font-weight: 400;
    text-align: left;
    color: ${Colors.titlePrimary};
  }

  h2 {
    font-weight: 500;
    font-size: 30px;
    line-height: 4.6rem;
    color: ${Colors.textPrimary};
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h2 {
      text-align: left;
    }
  }
`;

export const MobileText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${Colors.primary};
  padding: 0 115px 0 30px;

  h1 {
    display: flex;
    font-weight: 400;
    font-family: Poppins, sans-serif;
    font-size: 20px;
    line-height: 1.875rem;
    padding-top: 4.5rem;
    color: ${Colors.titlePrimary};
  }

  h2 {
    font-weight: 600;
    font-family: Poppins, sans-serif;
    font-size: 20px;
    line-height: 1.875rem;
    padding-top: 0.8rem;
    white-space: nowrap;
    color: ${Colors.titlePrimary};
  }

  @media (min-width: 699px) {
    padding: 0 115px 0 70px;

    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const AdotaPetImage = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 34%;
  background-color: ${Colors.primary};

  @media (min-width: 699px) {
    height: 10%;
    padding: 0 130px 0 130px;
  }

  @media (min-width: 1024px) {
    width: 50%;
    height: 500px;
    padding: 0;
  }

  @media (min-width: 1300px) {
    width: 60%;
    height: 460px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15% 0 5%;
  background-color: ${Colors.primary};

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

  @media (min-width: 699px) {
    a {
      img {
        width: 70%;
      }
    }
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
    padding: 0 1% 0 5%;

    a {
      justify-content: flex-start;

      img {
        width: 70%;
      }
    }
  }

  @media (min-width: 1300px) {
    // padding: 0 9% 0 1%;

    a {
      img {
        width: 75%;
      }
    }
  }
`;
