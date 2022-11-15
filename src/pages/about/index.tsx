import { NextPage } from 'next';
import { Container, ReturnButton, TextContainer } from './styled';

const About: NextPage = () => {
  return (
    <Container>
      <ReturnButton>
        <a href="/">
          <img src="./images/return-icon.svg" alt="Botão de voltar" />
        </a>
      </ReturnButton>
      <TextContainer>
        <h1>Sobre nós</h1>
        <h2>
          Nós somos um grupo de estudantes que criamos o Adota Pet em parceria
          com a Paradise Cats, uma ONG independente sem fins lucrativos que
          realiza o trabalho de resgate e adoção responsáveis de gatinhos em
          situação de rua. Buscamos por oferecer uma plataforma que facilite o
          processo de adoção tanto para o público em geral, mas como também para
          administradores de ONGs.
        </h2>
      </TextContainer>
    </Container>
  );
};

export default About;
