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
  background-color: white;
  border-radius: 10px;
  margin: 5px;
`;

const BriefButton = styled.div`
  margin: 10px;
  border: none;
  font-size: 1.2rem;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #999999;
  border-radius: 10px;

  font-size: 24px;
`;

export { BriefContainer, BriefWrapper, BriefButton };
