import styled from 'styled-components';

export const BaseLabel = styled.label`
  width: 100%;
  font-size: 30px;
`;

export const BaseInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 30px;
  &:focus {
    outline: none;
  }
`;

export const BaseButton = styled.button`
  width: 100%;
  font-size: 30px;
  position: relative;
  background-color: #8257e5;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  & > span {
    margin-left: 5px;
    position: absolute;
    display: inline-flex;
    font-size: 40px;
    line-height: 20px;
    max-height: 48px;
    bottom: 12px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @media (min-width: 767px) {
    & > :first-child {
      width: calc(60% - 5px);
    }
    & > :last-child {
      width: calc(40% - 5px);
    }
  }
  @media (min-width: 1280px) {
  }
`;
