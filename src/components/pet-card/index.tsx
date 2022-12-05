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
  ImgButton,
} from './styled';

interface IPetCardProps {
  pet: any;
  onClick: () => void;
  isLogged: boolean;
}

const PetCard: NextPage<IPetCardProps> = (props) => {
  const buildQueryString = (pet) => {
    let query = [];
    if (pet)
      Object.entries(pet).forEach(([key, value]) => {
        query.push(`${key}=${value}`);
      });
    window.location.href = `/pets/add?` + query.join('&');
  };
  const formatDate = (date: string) => {
    return date.split('T')[0];
  };
  return (
    <Container>
      <CardContent>
        <PetInfoContainer>
          <Image
            src={`https://anjos-de-patas.s3.sa-east-1.amazonaws.com/${
              props?.pet?.images?.length && props.pet?.images[0]
            }`}
            alt="Imagem do animal"
          />
          <PetInfo>
            <h2>{props.pet.name}</h2>
            <TextContainer>
              <ul>
                <li>{props.pet.gender === 'm' ? 'Macho' : 'Femea'}</li>
                <li>Nascido em {formatDate(props.pet.birthDate)}</li>
                <li>
                  {props.pet.castrated === 'sim'
                    ? 'Castrado'
                    : 'Castracao pendente'}
                </li>
              </ul>

              <ul>
                <li>
                  {props.pet.vaccinated === 'sim'
                    ? 'Vacinado'
                    : 'Vacinacao pendente'}
                </li>
                <li>FIV {props.pet.fiv === 'sim' ? 'Positivo' : 'Negativo'}</li>
                <li>
                  FELV {props.pet.felv === 'sim' ? 'Positivo' : 'Negativo'}
                </li>
              </ul>
            </TextContainer>
          </PetInfo>
        </PetInfoContainer>
        {props.isLogged ? (
          <StatusButton>
            <a onClick={() => buildQueryString(props.pet)}>
              <ImgButton status={props.pet.status} alt="Botão de status" />
            </a>
          </StatusButton>
        ) : (
          <AdoptButton onClick={() => props.onClick()}>
            <a>
              <img
                src="./images/get-in-touch-button.svg"
                alt="Botão para entrar em contato"
              />
            </a>
          </AdoptButton>
        )}
      </CardContent>
    </Container>
  );
};

export default PetCard;
