import { NextPage } from 'next';
import { Container, AdoptButton, Image, PetInfo, StatusButton } from './styled';

interface IPetCardProps {
  name: string;
}

const PetCard: NextPage<IPetCardProps> = (props) => {
  return (
    <Container>
      <Image src="./images/cat-img-1.svg" alt="Imagem do animal"></Image>
      <h2>{props.name}</h2>
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
      <AdoptButton>
        <a>
          <img
            src="./images/get-in-touch-button.svg"
            alt="Botão para entrar em contato"
          />
        </a>
      </AdoptButton>

      <StatusButton>
        <a>
          <img alt="Botão para entrar em contato" />
        </a>
      </StatusButton>
    </Container>
  );
};

export default PetCard;
