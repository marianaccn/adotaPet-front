import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  background-color: ${Colors.boxBase};
  height: 27.0625rem;
  width: 21.4375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  flex-direction: column;
  margin: 30px 0 20px 0;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Archivo', sans-serif;
    line-height: 1.5625rem;
    color: ${Colors.textTitle};
  }
`;

export const Image = styled.img`
  width: 11.0625rem;
  height: 11.125rem;
  border-radius: 0.625rem;
  margin: 0.875rem auto 1.25rem;
`;

export const PetInfo = styled.div`
  display: flex;
  flex-direction: align;
  justify-content: space-between;
  width: 17.125rem;
  height: 4.9375rem;
  margin: 0.6875rem 0 1.9375rem 0;

  ul {
    font-size: 0.6875rem;
    font-weight: 400;
    line-height: 1.625rem;
    color: ${Colors.textBase};
  }
`;

export const AdoptButton = styled.div`
  display: flex;
  width: 100%;
  height: 4.75rem;
  background-color: ${Colors.boxFooter};
  border-radius: 0.5rem;
  border-top: 0.38px solid ${Colors.lineWhite};

  img {
    width: 210px;
    height: 49px;
    margin: 13px 66px;
  }
`;

export const StatusButton = styled.div`
  display: none;
  justify-content: center;
  width: 100%;
  height: 4.75rem;
  background-color: ${Colors.boxFooter};
  border-radius: 0.5rem;
  border-top: 0.38px solid ${Colors.lineWhite};

  img {
    margin: 14px 0 14px;
    content: url('./images/adopted-status-button.svg');

    &:hover {
      content: url('./images/not-adopted-status-button.svg');
    }
  }
`;
