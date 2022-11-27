import { useState } from 'react';
import { ReturnButtonContainer } from '@components/return-button/styled';
import { NextPage } from 'next';
import {
  Container,
  Header,
  ContainerInputs,
  TopHeader,
  Input,
  PetInfo,
  Line,
  Select,
  ButtonContainer,
  InputFile,
  InputFileLabel,
  InputColumnsDesktop,
} from './styled';

const PetsRegistration: NextPage = () => {
  const [gatos, setGatos] = useState(['Bartolomeu', 'Miuazinho']);

  return (
    <Container>
      <Header>
        <TopHeader>
          <ReturnButtonContainer>
            <a href="/">
              <img src="./images/return-icon.svg" alt="Botão de voltar" />
            </a>
          </ReturnButtonContainer>
        </TopHeader>

        <h1 onClick={() => setGatos(['bartolomeu', 'miauzinho'])}>
          Cadastre um novo<br></br> bichinho !
        </h1>
      </Header>
      <PetInfo>
        <h2>Dados do animal</h2>
        <Line></Line>
        <ContainerInputs>
          <InputColumnsDesktop>
            <label>Nome</label>
            <Input type="text" value="" />

            <label>Espécie</label>
            <Input type="text" value="" />

            <label>Sexo</label>
            <Select value="">
              <option value="" disabled selected></option>
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </Select>

            <label>O animal é castrado?</label>
            <Select value="">
              <option value="" disabled selected></option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </Select>

            <label>Possui vacina?</label>
            <Select value="">
              <option value="" disabled selected></option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </Select>

            <label>Possui FIV testado?</label>
            <Select value="">
              <option value="" disabled selected></option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </Select>
          </InputColumnsDesktop>

          <InputColumnsDesktop>
            <label>Possui FELV testado?</label>
            <Select value="">
              <option value="" disabled selected></option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </Select>

            <label>Status</label>
            <Select value="">
              <option value="" disabled selected></option>
              <option value="Disponível">Disponível</option>
              <option value="Adotado">Adotado</option>
            </Select>

            <label>Endereço do lar temporário</label>
            <Input type="text" value="" />

            <label>Nome do responsável</label>
            <Input type="text" value="" />

            <label>Contato do responsável </label>
            <Input type="text" value="" />

            <p>Foto do animal</p>
            <InputFileLabel>
              <img
                src="./images/select-file-button.svg"
                alt="Botão para selecionar imagem"
              />
              <InputFile type="file" value="" />
            </InputFileLabel>
          </InputColumnsDesktop>
        </ContainerInputs>
      </PetInfo>
      <ButtonContainer>
        <a href="/">
          <img src="./images/save-pet-info-button.svg" alt="Botão de salvar" />
        </a>
      </ButtonContainer>
    </Container>
  );
};

export default PetsRegistration;
