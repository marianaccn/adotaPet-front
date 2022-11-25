import { useState } from 'react';
import { NextPage } from 'next';
import {
  Container,
  TextContainer,
  PublicFilters,
  FilterContainer,
  PrivateFilter,
  Filters,
  Line,
} from './styled';

const Filter: NextPage = () => {
  const [status, setStatus] = useState('');

  return (
    <Container>
      <TextContainer>
        <img src="./images/filter-icon.svg" alt="Ícone de filtro"></img>
        <p>Filte por sexo, idade ...</p>
      </TextContainer>

      <Line></Line>

      <Filters>
        {true && (
          <PrivateFilter>
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                alert(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="todos">Todos</option>
              <option value="adotado">Adotado</option>
              <option value="disponivel">Disponível</option>
            </select>
          </PrivateFilter>
        )}

        <PublicFilters>
          <FilterContainer>
            <label>Sexo</label>
            <select>
              <option value="" disabled selected>
                Selecione
              </option>
              <option>Todos</option>
              <option>Macho</option>
              <option>Fêmea</option>
            </select>
          </FilterContainer>

          <FilterContainer>
            <label>Idade</label>
            <select>
              <option value="" disabled selected>
                Selecione
              </option>
              <option>Todos</option>
              <option>4 á 11 meses</option>
              <option>1 á 5 anos</option>
              <option>6 á 10 anos</option>
              <option>Acima de 10 anos</option>
            </select>
          </FilterContainer>
        </PublicFilters>
      </Filters>
    </Container>
  );
};

export default Filter;
