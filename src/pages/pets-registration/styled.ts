import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${Colors.background};
  height: 100vh;
  width: 100vw;
  overflow: auto;
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
      margin: 64px 0 54px 42px;
      font-size: 36px;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      margin: 64px 0 54px 52px;
      font-size: 40px;
      letter-spacing: 1px;
    }
  }

  @media (min-width: 1300px) {
    h1 {
      margin: 64px 0 54px 102px;
    }
  }

  @media (min-width: 1800px) {
    h1 {
      font-size: 45px;
    }
  }
`;

export const TopHeader = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
`;

export const PetInfo = styled.div`
  padding: 0 25px 0 32px;

  h2 {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 34px;
    color: ${Colors.darkText};
    margin: 29px 0 15px 0;
  }

  @media (min-width: 699px) {
    padding: 0 54px 0 42px;
  }

  @media (min-width: 1024px) {
    padding: 0 42px 0 52px;
  }

  @media (min-width: 1300px) {
    padding: 0 42px 0 102px;

    h2 {
      font-size: 22px;
    }
  }

  @media (min-width: 1800px) {
    h2 {
      font-size: 30px;
      margin: 39px 0 25px 0;
    }
  }
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid ${Colors.smallInfo};
`;

export const ContainerInputs = styled.div`
  align-items: flex-start;
  background-color: ${Colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${Colors.textComplement};
    padding: 15px 4px 4px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${Colors.textComplement};
    padding: 15px 4px 4px;
  }

  @media (min-width: 1300px) {
    label {
      font-size: 16px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (min-width: 1800px) {
    label {
      font-size: 20px;
      padding: 30px 4px 10px;
    }

    p {
      padding: 30px 4px 10px;
      font-size: 20px;
    }
  }
`;

export const Input = styled.input`
  background-color: ${Colors.lineWhite};
  border-radius: 8px;
  border: none;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  width: 100%;
  padding-left: 14px;
`;

export const InputFile = styled.input`
  display: none;
`;

export const InputFileLabel = styled.label`
  padding: 4px 0 0 0 !important;

  img {
    height: 40px;
  }

  @media (min-width: 699px) {
    img {
      height: 42px;
    }
  }

  @media (min-width: 1300px) {
    img {
      height: 45px;
    }
  }

  @media (min-width: 1800px) {
    img {
      height: 55px;
    }
  }
`;

export const RadioInput = styled.div`
  display: flex;
`;

export const Select = styled.select`
  background-color: ${Colors.lineWhite};
  border-radius: 8px;
  border: none;
  font-family: Poppins, sans-serif;
  font-size: 13px;
  font-weight: 400;
  height: 40px;
  width: 100%;
  padding-left: 14px;
  color: ${Colors.textComplement};

  @media (min-width: 1300px) {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;

  @media (min-width: 1300px) {
    img {
      margin: 35px 0 0;
      height: 64px;
    }
  }

  @media (min-width: 1800px) {
    img {
      height: 80px;
    }
  }
`;
