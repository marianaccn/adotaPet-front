import { Colors } from '@styles/theme';
import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.background};
`;

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
