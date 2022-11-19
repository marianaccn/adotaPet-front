import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${Colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${Colors.textPrimary};
  }
`;
export const Filters = styled.div`
  display: flex;
  background-color: ${Colors.background};
`;
