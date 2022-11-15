import { Background, Container } from './styled';

export const Layout = ({ children }) => {
  return (
    <Background>
      <Container>{children}</Container>
    </Background>
  );
};
