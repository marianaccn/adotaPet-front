import { NextPage } from 'next';
import { Container, ContainerButton, Image, PetInfo } from './styled';
import { createPopup } from '@typeform/embed';
import '@typeform/embed/build/css/popup.css';

const PetCard: NextPage = () => {
  const { toggle } = createPopup('Rk4PQ71j');

  return (
    <Container>
      <Image src="./images/cat-img-1.svg" alt="Imagem do animal"></Image>
      <h2>Bartolomeu</h2>
      <PetInfo>
        <ul>
          <li>Macho</li>
          <li>2 anos</li>
          <li>Castrado</li>
        </ul>

        <ul>
          <li>Vacinado</li>
          <li>FIV não testado</li>
          <li>FELV não testado</li>
        </ul>
      </PetInfo>
      <ContainerButton>
        <a onClick={toggle}>
          <img
            src="./images/get-in-touch-button.svg"
            alt="Botão para entrar em contato"
          />
        </a>
      </ContainerButton>
    </Container>
  );
};

export default PetCard;
