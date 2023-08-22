import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// simple rule-based ...

const checkTheme = (genie: string, themeList: string[]) => {
  for (let i = 0; i < themeList.length; i++) {
    if (genie.includes(themeList[i])) {
      return themeList[i];
    }
  }
  return "none";
};

const themeList = [
  "과학",
  "경제",
  "사회",
  "생활문화",
  "세계",
  "오피니언",
  "정치",
];

interface HandleGenieProps {
  genie: string;
}

const HandleGenie = ({ genie }: HandleGenieProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (genie.includes("브리핑")) {
      if (genie.includes("테마")) {
        document.getElementById("brief-button-theme")?.click();
      } else {
        document.getElementById("brief-button-user")?.click();
      }
    } else if (genie.includes("이동")) {
      // 메인 화면으로 이동
      // 테마 화면으로 이동
      // 특정 기사 화면으로 이동

      if (genie.includes("메인")) {
        navigate("/");
      } else if (checkTheme(genie, themeList) !== "none") {
        const theme = checkTheme(genie, themeList);
        const timeoutId = setTimeout(() => {
          navigate(`/themes/${themeList.indexOf(theme)}`);
        }, 1000);
      }
    }
  }, [genie]);

  return <div></div>;
};

export default HandleGenie;
