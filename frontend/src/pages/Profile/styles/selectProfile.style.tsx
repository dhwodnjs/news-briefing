import { styled } from "styled-components";

const SelectProfileContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / -1;

  display: grid;
  grid-template-rows: 3fr 5fr 1fr;
`;

const SelectProfileText = styled.div`
  align-self: center;
  justify-self: center;
  font-size: 25px;
`;

const SelectProfileWrapper = styled.div``;
const SelectProfileItemList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const SelectProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
const SelectProfileItemName = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;
const SelectProfileItemImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
`;

const AddProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  margin-right: 20px;
`;

const AddProfileIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #d9d9d9;
  color: white;
  display: flex;
  //   align-items: center;
  justify-content: center;
  line-height: 25px;
  margin-right: 10px;
  font-size: 30px;
  font-weight: bold;
`;
const AddProfileText = styled.div`
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

export {
  SelectProfileContainer,
  SelectProfileText,
  SelectProfileWrapper,
  SelectProfileItemList,
  SelectProfileItem,
  SelectProfileItemName,
  SelectProfileItemImage,
  AddProfileWrapper,
  AddProfileIcon,
  AddProfileText,
};
