import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2.5rem;

  img {
    margin: 0 18px;
  }

  p {
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: ${Colors.textPrimary};
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 18px 38px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  label {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.375rem;
    color: ${Colors.textPrimary};
    padding: 0 4px 4px;
  }

  select {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: ${Colors.smallInfo};
    border-radius: 0.5rem;
    height: 3rem;
    width: 170px;
    padding: 10px;
  }
`;
