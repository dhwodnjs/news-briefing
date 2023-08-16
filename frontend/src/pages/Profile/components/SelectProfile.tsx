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
    <S.SelectProfileContainer>
      <S.SelectProfileText>프로필을 선택하세요</S.SelectProfileText>
      <S.SelectProfileWrapper>
        <S.SelectProfileItemList>
          {DefaultUserList.map((user, key) => (
            <S.SelectProfileItem
              key={key}
              onClick={() => {
                navigate("/");
              }}
            >
              <S.SelectProfileItemImage src={user.image} />
              <S.SelectProfileItemName>{user.name}</S.SelectProfileItemName>
            </S.SelectProfileItem>
          ))}
        </S.SelectProfileItemList>
      </S.SelectProfileWrapper>

      <S.AddProfileWrapper>
        <S.AddProfileIcon> + </S.AddProfileIcon>
        <S.AddProfileText
          onClick={() => {
            navigate("/customize");
          }}
        >
          {" "}
          프로필 추가{" "}
        </S.AddProfileText>
      </S.AddProfileWrapper>
    </S.SelectProfileContainer>
  );
};

export default SelectProfile;
