import { styled } from "styled-components";

const MainProfileCircleWrapper = styled.div`
  grid-column: 1/2;
  // grid-row: 2/3;

  background-color: white;
  border-radius: 12px;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
  padding-right: 12px;

  margin-left: 12px;

  transition:
    margin 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    font-size 0.2s ease-in-out,
    font-weight 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
    margin: -3px;
    margin-left: 9px;
  }
`;

const ProfileCircleWrapper = styled.div`
  display: flex;
  width: 90%;
  padding-top: 50%;
  padding-bottom: 50%;
  margin-left: 20px;

  justify-self: flex-end; /* Aligns content to the right */

  transition:
    margin 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    font-size 0.2s ease-in-out,
    font-weight 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
    margin: -3px;
    margin-left: 9px;
  }
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
  MainProfileCircleWrapper,
  ProfileCircleItem,
  ProfileCircleWrapper,
  ProfileCircleImage,
  ProfileChangeButton,
  ProfileSettingButton,
};
