import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles";

const SelectProfile = () => {
  const DefaultUserList = [
    {
      name: "User 1",
      image: process.env.PUBLIC_URL + `/image/image1.jpg`,
    },
    {
      name: "User 2",
      image: process.env.PUBLIC_URL + `/image/image1.jpg`,
    },
    {
      name: "User 3",
      image: process.env.PUBLIC_URL + `/image/image1.jpg`,
    },
  ];

  const navigate = useNavigate();

  return (
    <S.SelectProfileContainer id="select-profile-container">
      <S.SelectProfileText id="select-profile-text">
        프로필을 선택하세요
      </S.SelectProfileText>
      <S.SelectProfileWrapper id="select-profile-wrapper">
        <S.SelectProfileItemList id="select-profile-item-list">
          {DefaultUserList.map((user, key) => (
            <S.SelectProfileItem
              key={key}
              onClick={() => {
                navigate("/");
              }}
              id={`select-profile-item-${key}`}
            >
              <S.SelectProfileItemImageWrapper id="select-profile-item-image-wrapper">
                <S.SelectProfileItemImage
                  src={user.image}
                  id={`select-profile-item-image-${key}`}
                />
              </S.SelectProfileItemImageWrapper>
              <S.SelectProfileItemName id={`select-profile-item-name-${key}`}>
                {user.name}
              </S.SelectProfileItemName>
            </S.SelectProfileItem>
          ))}
        </S.SelectProfileItemList>
      </S.SelectProfileWrapper>

      <S.AddProfileWrapper id="add-profile-wrapper">
        <S.AddProfileIcon id="add-profile-icon"> + </S.AddProfileIcon>
        <S.AddProfileText
          onClick={() => {
            navigate("/customize");
          }}
          id="add-profile-text"
        >
          {" "}
          프로필 추가{" "}
        </S.AddProfileText>
      </S.AddProfileWrapper>
    </S.SelectProfileContainer>
  );
};

export default SelectProfile;
