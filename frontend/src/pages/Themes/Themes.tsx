import Categories from "../Common/Categories";
import Header from "../Common/Header";
import ProfileCircle from "../Common/ProfileCircle";
import * as S from "../styles";
import ThemeArticles from "./components/ThemeArticles";

const Themes = () => {
  return (
    <S.MainWindow>
      <Header />
      <ProfileCircle />
      <Categories />
      <ThemeArticles />
    </S.MainWindow>
  );
};

export default Themes;
