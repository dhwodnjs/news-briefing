import { styled } from 'styled-components';

/**
 * Window div includes Header, Container everything
 *
 */
const MainWindow = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
`;

/**
 * Main page div, includes specific components Main has.
 */
const MainPage = styled.div``;

export { MainWindow, MainPage };
