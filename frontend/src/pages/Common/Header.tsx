import React from "react";
import * as S from "../styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  /**
   * No special header
   * Just a header with logo
   * Logo is clickable and redirects to main page
   */

  const navigate = useNavigate();

  return (
    <S.HeaderContainer>
      <S.HeaderText
        onClick={() => {
          navigate(`/`);
        }}
      >
        Genie News
      </S.HeaderText>
    </S.HeaderContainer>
  );
};

export default Header;
