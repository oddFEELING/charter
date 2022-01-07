import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
`;

export const MainChart = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 5vh 5vw;
  background-color: rgb(250, 250, 250);
`;

export const OptiionBtn = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 3vw;
  top: 3vh;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 0.7rem;
  background-color: rgba(40, 40, 40, 0.8);
  box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.1);
  transition: 300ms all ease-in-out;

  &:hover {
    box-shadow: 3px 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const MenuDiv = styled.section`
  width: 25%;
  height: 80%;
  right: 3vw;
  display: flex;
  top: ${(props) => (props.show ? '15vh' : 0)};
  pointer-events: ${(props) => (props.show ? 'auto' : 'none')};
  opacity: ${(props) => (props.show ? 1 : 0)};
  position: absolute;
  border-radius: 5px;
  gap: 1%;
  border: thin solid rgba(100, 100, 100, 0.4);
  box-shadow: 15px 25px 40px rgba(0, 0, 0, 0.2);
  background-color: #2cbd74;
  transition: 300ms all ease-in-out;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 3vh 2vw;

  p {
    padding: 1px;
    margin: 0;
    border-bottom: thin solid rgba(20, 20, 20, 0.7);
  }
`;

export const FileBtn = styled.button`
  width: 70%;
  height: 30px;
  cursor: pointer;
  border 1px solid rgba(0,0,0,0.2);
  background-color: white;
  font-size: clamp(.5rem, .8vw, 1.5rem);
  transition: 300ms all ease-in-out;

  &:hover {
  box-shadow: 3px 6px 15px rgba(0,0,0,0.2)
  }
`;

export const SectionDiv = styled.section`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20%;

  button {
    cursor: pointer;
  }
`;

export const AxisBtn = styled.select`
  width: 40%;
  height: 100%;
  background-color: white;
  outline: none;
  cursor: pointer;
  padding: 0 1.5%;

  &:hover {
    box-shadow: 3px 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

//--------------------------------------->  CHART STYLES
export const ChartContainer = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 5vh 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(240, 240, 240);

  .empty__img {
    width: 30%;
  }
  .empty__text {
    color: #2cbd74;
    padding: 5px;
    margin: 0;
    border-bottom: thin solid black;
    font-size: clamp(1rem, 2vw, 6rem);
  }
`;
