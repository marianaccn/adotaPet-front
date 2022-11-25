import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const ReturnButtonContainer = styled.button`
  display: flex;
  justify-content: flex-start;
  border: none;
  background-color: ${Colors.primary};
  margin: 50px 32px 0;
  align-items: center;

  img {
    height: 43px;
  }

  @media (min-width: 699px) {
    img {
      height: 53px;
    }
  }
`;
