import { styled } from "styled-components";

const SelectProfileContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / -1;

  display: grid;
  grid-template-rows: 2fr 5fr 1fr;
`;

const SelectProfileText = styled.div`
  align-self: center;
  justify-self: center;
  font-size: 25px;
`;

const SelectProfileWrapper = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;

const SelectProfileItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  height: 100%;
`;

const SelectProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  gap: 20px;
`;
const SelectProfileItemName = styled.div`
  font-size: 24px;
  height: 30px;
`;

const SelectProfileItemImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
`;

const SelectProfileItemImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;

const AddProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  margin-right: 60px;
  gap: 10px;
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
  justify-self: center;
  align-self: center;
  line-height: 25px;
  font-size: 30px;
  font-weight: bold;
`;
const AddProfileText = styled.div`
  font-size: 25px;
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
  SelectProfileItemImageWrapper,
  SelectProfileItemImage,
  AddProfileWrapper,
  AddProfileIcon,
  AddProfileText,
};
