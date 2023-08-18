import { styled } from "styled-components";

const ProfileCircleWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;

  background-color: white;
  border-radius: 12px;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
  padding-right: 12px;

  margin-left: 12px;
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

  color: #ccc;
`;

const ProfileChangeButton = styled.div`
  border-radius: 50%;
  cursor: pointer;
  width: 12px;
  height: 12px;
  text-align: center;
  align-self: flex-end;
  justify-self: center;
`;
const ProfileSettingButton = styled.div`
  border-radius: 50%;
  cursor: pointer;
  cursor: pointer;
  width: 12px;
  height: 12px;
  text-align: center;
  line-height: 15px;
  align-self: flex-start;
  justify-self: center;
`;

export {
  ProfileCircleItem,
  ProfileCircleWrapper,
  ProfileCircleImage,
  ProfileChangeButton,
  ProfileSettingButton,
};
