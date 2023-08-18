import * as S from "../../styles";

const SetProfile = () => {
  const img = process.env.PUBLIC_URL + `/image/image1.jpg`;

  const defaultTheme = [
    {
      id: 1,
      name: "정치",
      selected: false,
    },
    {
      id: 2,
      name: "경제",
      selected: false,
    },
    {
      id: 3,
      name: "사회",
      selected: true,
    },
    {
      id: 4,

      name: "문화",
      selected: false,
    },
    {
      id: 5,
      name: "IT",
      selected: false,
    },
    {
      id: 6,
      name: "스포츠",
      selected: true,
    },
    {
      id: 7,
      name: "연예",
      selected: false,
    },
    {
      id: 8,
      name: "생활",
      selected: false,
    },
    {
      id: 9,
      name: "세계",
      selected: false,
    },
  ];

  const defaultPress = [
    {
      id: 1,
      name: "경향신문",
      selected: false,
    },
    {
      id: 2,
      name: "국민일보",
      selected: false,
    },
    {
      id: 3,
      name: "동아일보",
      selected: false,
    },
    {
      id: 4,
      name: "문화일보",
      selected: true,
    },
    {
      id: 5,
      name: "서울신문",
      selected: false,
    },
    {
      id: 6,
      name: "세계일보",
      selected: false,
    },
  ];

  return (
    <S.ProfileContainer id="profile-container">
      <S.ProfileImage id="profile-image" src={img} />

      <S.ProfileWrapper id="profile-wrapper">
        <S.ProfileNameWrapper id="profile-name-wrapper">
          <S.ProfileNameText id="profile-name-text"> 닉네임 </S.ProfileNameText>
          <S.ProfileNameInput id="profile-name-input" />
        </S.ProfileNameWrapper>

        <S.ProfileThemeWrapper id="profile-theme-wrapper">
          <S.ProfileThemeText id="profile-theme-text">
            {" "}
            관심 분야{" "}
          </S.ProfileThemeText>
          <S.ProfileThemeItemList id="profile-theme-item-list">
            {defaultTheme.map((theme) => (
              <S.ProfileThemeItem
                id={`profile-theme-item-${theme.id}`}
                key={theme.id}
                buttonState={theme.selected}
              >
                {theme.name}
              </S.ProfileThemeItem>
            ))}
          </S.ProfileThemeItemList>
        </S.ProfileThemeWrapper>

        <S.ProfilePressWrapper id="profile-press-wrapper">
          <S.ProfilePressText id="profile-press-text">
            {" "}
            관심 언론사{" "}
          </S.ProfilePressText>
          <S.ProfilePressItemList id="profile-press-item-list">
            {defaultPress.map((press) => (
              <S.ProfilePressItem
                id={`profile-press-item-${press.id}`}
                key={press.id}
                buttonState={press.selected}
              >
                {press.name}
              </S.ProfilePressItem>
            ))}
          </S.ProfilePressItemList>
        </S.ProfilePressWrapper>
      </S.ProfileWrapper>
    </S.ProfileContainer>
  );
};

export default SetProfile;
