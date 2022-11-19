import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const ReturnButtonContainer = styled.button`
  display: flex;
  justify-content: flex-start;
  border: none;
  background-color: ${Colors.primary};
  width: 100vw;
  height: 2rem;
  margin: 3.75rem 2rem 0;

  img {
    height: 2.9rem;
  }
`;
