import { NextPage } from 'next';
import {
  Container,
  AdoptButton,
  Image,
  PetInfo,
  StatusButton,
  PetInfoContainer,
  CardContent,
  TextContainer,
} from './styled';

interface IPetCardProps {
  name: string;
}

const PetCard: NextPage<IPetCardProps> = (props) => {
  return (
    <Container>
      <CardContent>
        <PetInfoContainer>
          <Image src="./images/cat-img-1.svg" alt="Imagem do animal"></Image>
          <PetInfo>
            <h2>{props.name}</h2>
            <TextContainer>
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
            </TextContainer>
          </PetInfo>
        </PetInfoContainer>
        <AdoptButton>
          <a>
            <img
              src="./images/get-in-touch-button.svg"
              alt="Botão para entrar em contato"
            />
          </a>
        </AdoptButton>
      </CardContent>
      <StatusButton>
        <a>
          <img alt="Botão para entrar em contato" />
        </a>
      </StatusButton>
    </Container>
  );
};

export default PetCard;
