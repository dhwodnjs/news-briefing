import { styled } from "styled-components";

const ProfileContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / -1;

  display: grid;
  grid-template-columns: 2.5fr 4fr;
`;
const ProfileImage = styled.img`
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
`;
const ProfileNameText = styled.div`
  font-size: 12px;
  justify-self: right;
  font-weight: bold;
`;
const ProfileNameInput = styled.input`
  font-size: 15px;
`;

const ProfileThemeWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 1fr;
  grid-template-rows: 1fr;
`;

const ProfileThemeText = styled.div`
  font-size: 12px;
  justify-self: right;
  font-weight: bold;
  line
`;
const ProfileThemeItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const ProfileThemeItem = styled.div<{ buttonState: boolean }>`
  

  align-self: center;
  justify-self: center;
  font-size: 15px;

  border-radius: 12px;
  background-color: #f2f2f2;

  text-align: center;
  line

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
`;
const ProfilePressText = styled.div`
  font-size: 12px;
  justify-self: right;
  font-weight: bold;
  line
`;
const ProfilePressItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const ProfilePressItem = styled.div<{ buttonState: boolean }>`
  

  align-self: center;
  justify-self: center;
  font-size: 15px;

  border-radius: 12px;

  text-align: center;
  line

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
