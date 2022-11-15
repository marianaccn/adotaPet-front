import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const ReturnButtonContainer = styled.button`
  display: flex;
  justify-content: flex-start;
  border: none;
  background-color: ${Colors.primary};
  margin: 1.25rem 1.25rem;

  img {
    height: 2.9rem;
  }
`;
