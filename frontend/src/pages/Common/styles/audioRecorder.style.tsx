import styled from "styled-components";

const recorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 300px;
  min-height: 100px;
  justify-content: center;
  justify-self: center;
  align-items: center;

  bottom: 0;
  right: 0;

  border-radius: 20px;
  background-color: white;
  font-size: 18px;

  box-shadow: 0px 0px 100px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
`;

const recorderButton = styled.div`
  height: 40px;
`;

const recordText = styled.div`
  flex: 1;
  padding: 20px;
`;
export { recorderContainer, recorderButton, recordText };
