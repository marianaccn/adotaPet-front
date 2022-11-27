import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 18px 0 18px;
  width: 90%;
  border-bottom: 1px solid ${Colors.primarylighter};

  @media (min-width: 1024px) {
    width: 95%;
  }

  @media (min-width: 1300px) {
    width: 97%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 40px;

  img {
    margin: 0 18px;
  }

  p {
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${Colors.textPrimary};
  }

  @media (min-width: 699px) {
    align-items: flex-end;

    p {
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    margin: 0 0 0 10px;
    align-items: flex-end;

    p {
      font-size: 18px;
    }
  }
`;

export const PublicFiltersContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 24px 0px 12px 0px;
  width: 100%;

  @media (min-width: 699px) {
    justify-content: space-around;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
    margin: 0 0 0 0;
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0px 18px 30px;

  @media (min-width: 699px) {
    flex-direction: row;
    margin: 10px 18px 30px;
  }
`;

export const PrivateFilter = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 18px;
  width: 100%;

  label {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: ${Colors.textPrimary};
    padding: 0 4px 4px;
  }

  select {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${Colors.smallInfo};
    border-radius: 8px;
    height: 48px;
    padding: 10px;
    width: 100%;
  }

  @media (min-width: 699px) {
    margin-top: 24px;

    label {
      font-size: 14px;
    }
  }

  @media (min-width: 1024px) {
    margin: 18px 0 0 10px;

    select {
      font-size: 16px;
    }

    label {
      font-size: 16px;
      padding: 0 4px 8px;
    }
  }
`;

export const PublicFilter = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  label {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: ${Colors.textPrimary};
    padding: 0 4px 4px;
  }

  select {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${Colors.smallInfo};
    border-radius: 8px;
    height: 48px;
    width: 170px;
    padding: 10px;
  }

  @media (min-width: 699px) {
    label {
      font-size: 14px;
    }

    select {
      font-size: 14px;
    }
  }

  @media (min-width: 1024px) {
    justify-content: center;
    margin: 18px 0 0 10px;

    label {
      font-size: 16px;
      padding: 0 4px 8px;
    }

    select {
      font-size: 16px;
    }
  }

  @media (min-width: 1300px) {
    select {
      width: 288px;
    }
  }

  @media (min-width: 1800px) {
    select {
      width: 413px;
    }
  }
`;
