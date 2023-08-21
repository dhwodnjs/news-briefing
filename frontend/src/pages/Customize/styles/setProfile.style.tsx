import { styled } from "styled-components";

const ProfileContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / -1;

  display: grid;
  grid-template-columns:
    minmax(0, 2fr)
    minmax(0, 4fr);
  padding-left: 50px;
`;

const ProfileImageWrapper = styled.div`
  background-color: #efefef;
  overflow: hidden;
  height: auto;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;

const ProfileWrapper = styled.div`
  justify-self: flex-start;
  align-self: center;
  display: grid;
  grid-template-rows: 1fr 3fr 3fr;
  gap: 30px;
  width: 80%;
  margin-left: 50px;
`;

const ProfileNameWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr;
  grid-template-rows: 1fr;
  column-gap: 10px;
`;
const ProfileNameText = styled.div`
  font-size: 18px;
  justify-self: right;
  align-self: center;
  font-weight: bold;
`;
const ProfileNameInput = styled.input`
  font-size: 15px;
  width: 40%;
  border-radius: 12px;
  border: none;
`;

const ProfileThemeWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 10px;
`;

const ProfilePressWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 10px;
`;

const ProfileThemeText = styled.div`
  font-size: 18px;
  justify-self: right;
  font-weight: bold;
  align-self: center;
`;
const ProfileThemeItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 10px;
`;

const ProfileThemeItem = styled.div<{ buttonState: boolean }>`
  align-self: center;
  justify-self: center;
  font-size: 18px;

  border-radius: 12px;
  background-color: white;

  text-align: center;
  width: 100%;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;

  &:hover {
    color: white;
    background-color: #898989;
  }

  ${(props) => {
    if (props.buttonState) {
      return `
        color: white;
        background-color: #898989;
      `;
    }
  }}
`;

const ProfilePressText = styled.div`
  font-size: 18px;
  justify-self: right;
  font-weight: bold;
  align-self: center;
`;
const ProfilePressItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  grid-column-gap: 10px;
  grid-row-gap: -15px;
`;
const ProfilePressItem = styled.div<{ buttonState: boolean }>`
  align-self: center;
  justify-self: center;
  font-size: 18px;

  border-radius: 12px;
  background-color: white;

  text-align: center;
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;

  width: 100%;

  &:hover {
    color: white;
    background-color: #898989;
  }

  background-color: white;

  ${(props) => {
    if (props.buttonState) {
      return `
        color: white;
        background-color: #898989;
      `;
    }
  }}
`;

export {
  ProfileContainer,
  ProfileImageWrapper,
  ProfileImage,
  ProfileWrapper,
  ProfileNameWrapper,
  ProfileNameText,
  ProfileNameInput,
  ProfileThemeWrapper,
  ProfileThemeText,
  ProfileThemeItemList,
  ProfileThemeItem,
  ProfilePressWrapper,
  ProfilePressText,
  ProfilePressItemList,
  ProfilePressItem,
};
