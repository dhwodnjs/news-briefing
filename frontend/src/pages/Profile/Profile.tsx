import Header from "../Common/Header";
import * as S from "../styles";
import SelectProfile from "./components/SelectProfile";

const Profile = () => {
  return (
    <S.MainWindow>
      <Header />
      <SelectProfile />
    </S.MainWindow>
  );
};

export default Profile;
