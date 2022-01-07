import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(250, 250, 250);
  align-items: center;
  gap: 2vw;
  justify-content: center;
`;

export const CardHolder = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  gap: 2vw;
  flex-wrap: wrap;
  justify-content: center;
`;

export const OptionCard = styled.div`
  cursor: pointer;
  width: 350px;
  height: 400px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 1.5px solid rgba(0, 0, 0, 0.15);
  background-color: white;
  border-radius: 10px;
  padding: 1vh 2vw;
  transition: 300ms all ease-in-out;

  &:hover {
    box-shadow: 10px 15px 25px rgba(0, 0, 0, 0.15);
    border: 0 solid rgba(0, 0, 0, 0.15);
  }
`;
