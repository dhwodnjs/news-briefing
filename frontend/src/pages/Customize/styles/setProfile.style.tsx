import { styled } from "styled-components";

const ProfileContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / -1;

  display: grid;
  grid-template-columns: 2.5fr 4fr;
`;
const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  align-self: center;
  justify-self: center;
`;

const ProfileWrapper = styled.div`
  align-self: center;
`;

const ProfileNameWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr;
  grid-template-rows: 1fr;
  margin: 10px;
`;
const ProfileNameText = styled.div`
  font-size: 20px;
  justify-self: right;
  font-weight: bold;
  margin: 5px;
`;
const ProfileNameInput = styled.input`
  font-size: 15px;
  margin-left: 25px;
  width: 120px;
`;

const ProfileThemeWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 1fr;
  grid-template-rows: 1fr;
  margin: 10px;
`;

const ProfileThemeText = styled.div`
  font-size: 20px;
  justify-self: right;
  margin: 5px;
  font-weight: bold;
  line-height: 40px;
`;
const ProfileThemeItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const ProfileThemeItem = styled.div<{ buttonState: boolean }>`
  width: 70px;
  height: 40px;
  margin: 5px;
  align-self: center;
  justify-self: center;
  font-size: 15px;

  border-radius: 10px;
  background-color: #f2f2f2;

  text-align: center;
  line-height: 40px;

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

const ProfilePressWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3.5fr 1fr;
  grid-template-rows: 1fr;
  margin: 10px;
`;
const ProfilePressText = styled.div`
  font-size: 20px;
  justify-self: right;
  margin: 5px;
  font-weight: bold;
  line-height: 40px;
`;
const ProfilePressItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const ProfilePressItem = styled.div<{ buttonState: boolean }>`
  width: 80px;
  height: 40px;
  margin: 5px;
  align-self: center;
  justify-self: center;
  font-size: 15px;

  border-radius: 10px;

  text-align: center;
  line-height: 40px;

  cursor: pointer;
  border: none;

  &:hover {
    color: white;
    background-color: #898989;
  }

  background-color: #f2f2f2;

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
