import styled from "styled-components";

const BriefContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 1fr;
`;

const BriefWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;

  border-radius: 12px;
`;

const BriefButton = styled.div`
  border: none;
  font-size: 1.2rem;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 12px;
  border: 3px solid #77af9c;

  font-size: 20px;
  font-weight: 500;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  margin: 0;
  transition:
    margin 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    font-size 0.2s ease-in-out,
    font-weight 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #77af9c;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
    color: white;
    font-weight: 600;
    font-size: 22px;
    margin: -3px;
  }
`;

export { BriefContainer, BriefWrapper, BriefButton };
