import { NextPage } from 'next';
import {
  Container,
  TextContainer,
  PublicFilters,
  FilterContainer,
  PrivateFilter,
  Filters,
} from './styled';

const Filter: NextPage = () => {
  return (
    <Container>
      <TextContainer>
        <img src="./images/filter-icon.svg" alt="Ícone de filtro"></img>
        <p>Filte por sexo ou idade</p>
      </TextContainer>

      <Filters>
        <PrivateFilter>
          <label>Status</label>
          <select>
            <option value="" disabled selected>
              Selecione
            </option>
            <option>Todos</option>
            <option>Adotado</option>
            <option>Disponível</option>
          </select>
        </PrivateFilter>

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
