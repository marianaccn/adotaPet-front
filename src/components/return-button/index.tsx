import { ReturnButtonContainer } from './styled';

export const ReturnButton = ({ children }) => {
  return (
    <ReturnButtonContainer>
      <a href="/">
        <img src="./images/return-icon.svg" alt="Botão de voltar" />
      </a>
    </ReturnButtonContainer>
  );
};
