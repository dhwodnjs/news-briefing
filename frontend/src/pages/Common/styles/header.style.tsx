import { styled } from "styled-components";

const HeaderContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  display: flex;
  padding: 1rem;

  background-color: #f7f8f9;
  align-items: center;
`;

const HeaderText = styled.div`
  cursor: pointer;

  font-size: 20px;
  font-weight: 700;
  font-family: "Fugaz One";
`;

export { HeaderContainer, HeaderText };
