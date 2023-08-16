import { styled } from "styled-components";

/**
 * Window div includes Header, Container everything
 *
 */
const MainWindow = styled.div`
  // @media (min-width: 650px) {
  //   width: 70vw;
  //   height: 90vh;
  // }

  // @media (max-width: 1000px) {
  //   width: 700px;
  //   height: 90vh;
  // }

  @media (min-width: 650px) {
    width: 900px;
    height: 90vh;
  }

  @media (max-width: 1000px) {
    width: 900px;
    height: 90vh;
  }

  margin: 0 auto;

  display: grid;

  grid-template-columns: 130px 1fr;
  grid-template-rows: 50px 1fr 5fr;

  background-color: #f7f8f9;

  margin-top: 30px;
`;

/**
 * Main page div, includes specific components Main has.
 */
const MainPage = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 4;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
`;

export { MainWindow, MainPage };
