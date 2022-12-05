import Filter from '@components/filter';
import { useEffect, useState } from 'react';
import PetCard from '@components/pet-card';
import { ReturnButtonContainer } from '@components/return-button/styled';
import { NextPage } from 'next';
import {
  Container,
  Header,
  ContainerPets,
  TopHeader,
  NewPetButton,
} from './styled';
import { Modal } from '@components/modal';
import {
  Step1,
  Step10,
  Step11,
  Step12,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
} from '@components/evaluation-form';
import { ListPets } from '@services/pets';

interface IPetCardProps {
  name: string;
}

const PetsAvailabes: NextPage<IPetCardProps> = (props) => {
  const [pets, setPets] = useState([]);
  const [modalStep, setModalStep] = useState(0);
  const [token, setToken] = useState('');
  const [petName, setPetName] = useState('');
  const [filters, setFilters] = useState({
    gender: '',
    ageRange: '',
    status: '',
  });
  const [form, setForm] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    peopleWithMe: [],
    hasMinor: false,
    experienceWithMinors: false,
    houseType: '',
    address: '',
    nettedWindows: false,
    hasStreetAccess: false,
  });
  const getPets = async (newFilter = {}) => {
    const { response } = await ListPets(0, 99, newFilter, token);
    if (!response?.error) {
      setPets(response?.data);
    }
  };
  useEffect(() => {
    const SessionToken = sessionStorage.getItem('token');
    if (SessionToken) {
      setToken(SessionToken);
    }
    getPets();
  }, []);

  const UpdateFilters = (newFilters: any) => {
    setFilters({ ...newFilters });
    getPets(newFilters);
  };

  const submitToWhatsapp = () => {
    let urlMessage = `*Formulário de adoção*%0A
    %0A*Pet:*%20${petName}%0A
    %0A*Nome:*%20${form.name}%0A
    %0A*Email:*%20${form.email}%0A
    %0A*Telefone:*%20${form.phone}%0A
    ${form.peopleWithMe.map(
      (people, index) =>
        `%0A*Possui%20${index + 1}%20membros%20na%20residência:*%20${
          people.name
        },%20*idade:*%20${people.age}%0A`
    )}
    %0A*Possui%20menor%20de%20idade:*%20${form.hasMinor ? 'Sim' : 'Não'}%0A
    %0A*Experiência%20em%20lidar%20com%20adaptação%20de%20animais%20com%20crianças:*%20${
      form.experienceWithMinors ? 'Sim' : 'Não'
    }%0A
    %0A*Tipo%20de%20residência:*%20${form.houseType}%0A
    %0A*Endereço:*%20${form.address}%0A
    %0A*Janelas%20teladas:*%20${form.nettedWindows ? 'Sim' : 'Não'}%0A
    %0A*Residência%20possui%20acesso%20a%20rua:*%20${
      form.hasStreetAccess ? 'Sim' : 'Não'
    }%0A`;

    const phone = '5515988091094';
    window.location.href = `
      https://wa.me/${phone}?text=${urlMessage}`;
  };

  return (
    <>
      <Container>
        <Header>
          <TopHeader>
            <ReturnButtonContainer>
              <a href="/">
                <img src="/images/return-icon.svg" alt="Botão de voltar" />
              </a>
            </ReturnButtonContainer>
            {!!token && (
              <a href="/pets/add">
                <NewPetButton
                  src="/images/register-pet-button.svg"
                  alt="Botão para cadastrar animal"
                ></NewPetButton>
              </a>
            )}
          </TopHeader>

          {!!token ? (
            <h1>
              Animais<br></br> cadastrados
            </h1>
          ) : (
            <h1>
              Animaizinhos<br></br> disponíveis
            </h1>
          )}
          <Filter filters={filters} setFilters={UpdateFilters} />
        </Header>
        <ContainerPets>
          {pets?.map((pet) => (
            <PetCard
              key={pet.id}
              pet={pet}
              onClick={() => {
                setModalStep(1);
                setPetName(pet.name);
              }}
              isLogged={!!token}
            />
          ))}
        </ContainerPets>
      </Container>
      {!!modalStep && (
        <Modal step={modalStep} changeStep={setModalStep} limit={12}>
          {modalStep === 1 && (
            <Step1 form={form} setForm={setForm} changeStep={setModalStep} />
          )}
          {modalStep === 2 && (
            <Step2 form={form} setForm={setForm} changeStep={setModalStep} />
          )}
          {modalStep === 3 && (
            <Step3 form={form} setForm={setForm} changeStep={setModalStep} />
          )}
          {modalStep === 4 && (
            <Step4 form={form} setForm={setForm} changeStep={setModalStep} />
          )}
          {modalStep === 5 && (
            <Step5 form={form} setForm={setForm} changeStep={setModalStep} />
          )}
          {modalStep === 6 && (
            <Step6 form={form} setForm={setForm} changeStep={setModalStep} />
          )}
          {modalStep === 7 && (
            <Step7 form={form} setForm={setForm} changeStep={setModalStep} />
          )}
          {modalStep === 8 && (
            <Step8 form={form} setForm={setForm} changeStep={setModalStep} />
          )}
          {modalStep === 9 && (
            <Step9 form={form} setForm={setForm} changeStep={setModalStep} />
          )}
          {modalStep === 10 && <Step10 changeStep={setModalStep} />}
          {modalStep === 11 && (
            <Step11
              form={form}
              changeStep={setModalStep}
              submit={() => submitToWhatsapp()}
            />
          )}
          {modalStep === 12 && (
            <Step12
              changeStep={setModalStep}
              submit={() => submitToWhatsapp()}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default PetsAvailabes;
