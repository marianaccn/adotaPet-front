import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import {
  Container,
  TextContainer,
  PublicFiltersContainer,
  PublicFilter,
  PrivateFilter,
  Filters,
  Line,
} from './styled';

interface IFilterProps {
  filters: {
    gender: string;
    ageRange: string;
    status: string;
  };
  setFilters: (data: any) => void;
}

const Filter: NextPage<IFilterProps> = ({ filters, setFilters }) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    var item_value = sessionStorage.getItem('token');
    setToken(item_value);
  }, []);

  return (
    <Container>
      <TextContainer>
        <img src="./images/filter-icon.svg" alt="Ícone de filtro"></img>
        <p>Filtre por sexo, idade ...</p>
      </TextContainer>

      <Line></Line>

      <Filters>
        {token && (
          <PrivateFilter>
            <label>Status</label>
            <select
              value={filters.status}
              onChange={(e) => {
                setFilters({ ...filters, status: e.target.value });
              }}
            >
              <option value="adotado">Adotado</option>
              <option value="disponivel">Disponível</option>
            </select>
          </PrivateFilter>
        )}

        <PublicFiltersContainer>
          <PublicFilter>
            <label>Sexo</label>
            <select
              value={filters.gender}
              onChange={(e) => {
                setFilters({ ...filters, gender: e.target.value });
              }}
            >
              <option value="">Todos</option>
              <option value="m">Macho</option>
              <option value="f">Fêmea</option>
            </select>
          </PublicFilter>

          <PublicFilter>
            <label>Idade</label>
            <select
              value={filters.ageRange}
              onChange={(e) => {
                setFilters({ ...filters, ageRange: e.target.value });
              }}
            >
              <option>Todos</option>
              <option value="4 week 11 month">4 á 11 meses</option>
              <option value="1 year 5 year">1 á 5 anos</option>
              <option value="6 year 10 year">6 á 10 anos</option>
              <option value="10 year 99 year">Acima de 10 anos</option>
            </select>
          </PublicFilter>
        </PublicFiltersContainer>
      </Filters>
    </Container>
  );
};

export default Filter;
