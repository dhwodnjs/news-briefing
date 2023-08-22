import { styled } from "styled-components";

/**
 * Window div includes Header, Container everything
 *
 */
const MainWindow = styled.div`
  @media (min-width: 650px) {
    width: 900px;
    height: 90vh;
  }

  @media (max-width: 1000px) {
    width: 900px;
    height: 90vh;
  }

  display: grid;

  grid-template-columns: 130px 1fr;
  grid-template-rows: 50px 1fr 5fr 0.3fr; // !!!

  margin: 5vh auto 5vh auto;
  background-color: #efefef;
  border-radius: 12px;

  gap: 12px;
  padding-bottom: 12px;
`;

/**
 * Main page div, includes specific components Main has.
 */
const MainPage = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 4;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: minmax(0, 2fr) minmax(0, 1fr);

  gap: 12px;
  padding-right: 12px;
`;

export { MainWindow, MainPage };
