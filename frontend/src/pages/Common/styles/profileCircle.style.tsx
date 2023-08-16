import { styled } from "styled-components";

const ProfileCircleWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;

  background-color: white;
  border-radius: 10px;
  margin: 10px;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const ProfileCircleItem = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: 600;
`;

const ProfileCircleImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  border: 1px solid #ccc;
  padding: 2px;

  margin-bottom: 5px;
  color: #ccc;
`;

const ProfileChangeButton = styled.div`
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  text-align: center;
`;
const ProfileSettingButton = styled.div`
  border-radius: 50%;
  cursor: pointer;
  cursor: pointer;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 15px;
`;

export {
  ProfileCircleItem,
  ProfileCircleWrapper,
  ProfileCircleImage,
  ProfileChangeButton,
  ProfileSettingButton,
};
