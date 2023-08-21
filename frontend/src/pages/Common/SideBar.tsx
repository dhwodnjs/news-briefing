import ProfileCircle from "./ProfileCircle";
import Categories from "./Categories";
import * as S from ".././styles";

const SideBar = () => {
  return (
    <S.SideBarContainer id="side-bar">
      <ProfileCircle />
      <Categories />
    </S.SideBarContainer>
  );
};

export default SideBar;
