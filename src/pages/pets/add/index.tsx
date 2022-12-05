import { useState, useEffect } from 'react';
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
import { AddPet, UpdatePet, RemovePet } from '@services/pets';
import { useRouter } from 'next/router';

const PetsRegistration: NextPage = () => {
  const router = useRouter();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('m');
  const [birthDate, setBirthDate] = useState('');
  const [isCastrated, setIsCastrated] = useState('sim');
  const [isVaccinated, setIsVaccinated] = useState('sim');
  const [isFiv, setIsFiv] = useState('nao');
  const [isFelv, setIsFelv] = useState('nao');
  const [status, setStatus] = useState('disponivel');
  const [imageName, setImageName] = useState('');
  const [image, setImage] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const SessionToken = sessionStorage.getItem('token');
    setToken(SessionToken);
    if (!SessionToken) {
      window.location.href = 'http://localhost:3000';
    }
  }, []);

  useEffect(() => {
    const query = window.location.search.split('&');
    const params = query.map((param, index) => {
      let newParam = param;
      if (index === 0) newParam = newParam.substring(1);
      return newParam.split('=');
    });
    params.map(([key, value]) => {
      if (key === '_id') setId(value);
      if (key === 'name') setName(value);
      if (key === 'gender') setGender(value);
      if (key === 'birthDate') setBirthDate(value);
      if (key === 'castrated') setIsCastrated(value);
      if (key === 'vaccinated') setIsVaccinated(value);
      if (key === 'fiv') setIsFiv(value);
      if (key === 'felv') setIsFelv(value);
      if (key === 'images') setImageName(value);
      if (key === 'status') setStatus(value);
    });
  }, []);

  const onImageChange = async (file) => {
    if (!file) return;
    setImage(file);
  };

  const postPet = async () => {
    const newPet = new FormData();
    if (id) newPet.append('_id', id);
    if (image) {
      newPet.append('file', image, imageName || 'imagem.jpg');
    }
    if (imageName) {
      newPet.append('imageName', imageName);
    }
    newPet.append('name', name);
    newPet.append('gender', gender);
    newPet.append('birthDate', new Date(birthDate).toISOString());
    newPet.append('castrated', isCastrated);
    newPet.append('vaccinated', isVaccinated);
    newPet.append('fiv', isFiv);
    newPet.append('felv', isFelv);
    newPet.append('status', status);

    id ? await UpdatePet(newPet, token) : await AddPet(newPet, token);
    window.location.href = '/pets';
  };

  const deletePet = async () => {
    await RemovePet(id, token);
    window.location.href = '/pets';
  };

  return (
    <Container>
      <Header>
        <TopHeader>
          <ReturnButtonContainer>
            <a href="/pets">
              <img src="/images/return-icon.svg" alt="Botão de voltar" />
            </a>
          </ReturnButtonContainer>
        </TopHeader>

        <h1>
          Cadastre um novo<br></br> bichinho !
        </h1>
      </Header>
      <PetInfo>
        <h2>Dados do animal</h2>
        <Line></Line>
        <ContainerInputs>
          <InputColumnsDesktop>
            <label>Nome</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />

            <label>Data de Nascimento</label>
            <Input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />

            <label>Sexo</label>
            <Select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="m">Macho</option>
              <option value="f">Fêmea</option>
            </Select>

            <label>O animal é castrado?</label>
            <Select
              value={isCastrated}
              onChange={(e) => setIsCastrated(e.target.value)}
            >
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </Select>

            <p>Foto do animal</p>
            <InputFileLabel>
              <img
                src="/images/select-file-button.svg"
                alt="Botão para selecionar imagem"
              />
              <InputFile
                type="file"
                onChange={(event) => {
                  onImageChange(event.target.files[0] || null);
                  if (!imageName) setImageName(event.target.value);
                }}
              />
            </InputFileLabel>
          </InputColumnsDesktop>

          <InputColumnsDesktop>
            <label>Possui vacina?</label>
            <Select
              value={isVaccinated}
              onChange={(e) => setIsVaccinated(e.target.value)}
            >
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </Select>

            <label>Possui FIV?</label>
            <Select value={isFiv} onChange={(e) => setIsFiv(e.target.value)}>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </Select>

            <label>Possui FELV?</label>
            <Select value={isFelv} onChange={(e) => setIsFelv(e.target.value)}>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </Select>

            <label>Status</label>
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="disponivel">Disponível</option>
              <option value="adotado">Adotado</option>
            </Select>

            {/* <label>Endereço do lar temporário</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Nome do responsável</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Contato do responsável </label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /> */}
          </InputColumnsDesktop>
        </ContainerInputs>
      </PetInfo>
      <ButtonContainer>
        <a onClick={() => postPet()}>
          <img src="/images/save-pet-info-button.svg" alt="Botão de salvar" />
        </a>
        {!!id && (
          <a onClick={() => deletePet()}>
            <img src="/images/delete-button.svg" alt="Botão de deletar" />
          </a>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default PetsRegistration;
