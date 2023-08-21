import Categories from "../Common/Categories";
import Header from "../Common/Header";
import ProfileCircle from "../Common/ProfileCircle";
import SideBar from "../Common/SideBar";
import * as S from "../styles";
import ThemeArticles from "./components/ThemeArticles";

const Themes = () => {
  return (
    <S.MainWindow>
      <Header />
      <SideBar />
      <ThemeArticles />
    </S.MainWindow>
  );
};

export default Themes;
