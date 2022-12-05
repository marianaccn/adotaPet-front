import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  position: relative;
  opacity: 1;
  width: 100vw;
  height: 100vh;
  padding: 75px 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 0;
  overflow: auto;
  overflow-x: hidden;
  @media (min-width: 767px) {
    width: 100vw;
    height: 100vh;
    padding: 75px 50px;
  }
  @media (min-width: 1280px) {
    width: 60vw;
    height: 80vh;
    border-radius: 10px;
    padding: 60px;
  }
`;

export const CloseButton = styled.img`
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  width: 60px;
  height: 30px;
  bottom: 20px;
  right: 20px;
  & > :nth-child(n) {
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 0 5px 5px 0;
  }
  & :first-child {
    transform: rotate(180deg);
  }
`;
