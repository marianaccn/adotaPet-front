import styled from 'styled-components';
import { Colors } from '../../styles/theme';

export const Container = styled.div`
  @media (min-width: 699px) {
    margin: 55px 0 27px 0;
  }
`;

export const CardContent = styled.div`
  background-color: ${Colors.boxBase};
  width: 343px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex-direction: column;
  margin: 30px 0 0 0;

  @media (min-width: 699px) {
    width: 633px;
    justify-content: space-around;
    margin: 0 0 0 0;
  }
`;

export const PetInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background-color: ${Colors.boxBase};

  @media (min-width: 699px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    margin: 33px 0 20px;
  }
`;

export const Image = styled.img`
  width: 177px;
  height: 178px;
  border-radius: 10px;
  margin: 14px auto 20px;

  @media (min-width: 699px) {
    width: 277px;
    height: 278px;
    margin: 0;
  }
`;

export const PetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  margin: 11px 0 0px 0;

  h2 {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Archivo', sans-serif;
    line-height: 1.5625rem;
    color: ${Colors.textTitle};
    margin-bottom: 14px;
  }

  @media (min-width: 699px) {
    width: 250px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 274px;
  margin: 11px 0 31px 0;

  ul {
    font-size: 12px;
    font-weight: 400;
    line-height: 26px;
    color: ${Colors.textBase};
  }

  @media (min-width: 699px) {
    flex-direction: column;

    ul {
      font-size: 12px;
      font-weight: 400;
      line-height: 26px;
      color: ${Colors.textBase};
    }
  }
`;

export const AdoptButton = styled.div`
  display: flex;
  width: 100%;
  height: 76px;
  background-color: ${Colors.boxFooter};
  border-radius: 8px;
  border-top: 0.3808px solid ${Colors.lineWhite};

  img {
    width: 210px;
    height: 49px;
    margin: 13px 66px;
  }

  @media (min-width: 699px) {
    display: flex;
    justify-content: flex-end;
    height: 86px;

    img {
      width: 250px;
      height: 56px;
      margin: 15px 35px;
    }
  }
`;

export const StatusButton = styled.div`
  display: none;
  justify-content: center;
  width: 100%;
  height: 76px;
  background-color: ${Colors.boxFooter};
  border-radius: 8px;
  border-top: 1px solid ${Colors.lineWhite};

  img {
    margin: 14px 0 14px;
    content: url('./images/adopted-status-button.svg');

    &:hover {
      content: url('./images/not-adopted-status-button.svg');
    }
  }

  @media (min-width: 699px) {
    display: none;
    justify-content: flex-end;
    height: 86px;
    padding: 0px 35px 0 0;

    img {
      margin: 15px 0 0px;
    }
  }
`;
