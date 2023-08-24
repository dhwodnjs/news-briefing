import React from "react";
import * as S from "../styles";
import { useNavigate } from "react-router-dom";

interface ProfileCircleProps {
  profileImage: string;
  profileName: string;
}

const ProfileCircle = () => {
  /**
   * ProfileCircle should contain user's profile image.
   * Assume that user's profile image is stored in the server.
   * For now, assume the image is at the public folder.
   */

  const defaultProfileImage: ProfileCircleProps = {
    profileImage: process.env.PUBLIC_URL + `/image1.jpg`,
    profileName: "JAEWON",
  };

  const navigate = useNavigate();
  console.log(defaultProfileImage.profileImage);
  return (
    <S.MainProfileCircleWrapper id="profile-circle-wrapper">
      <S.ProfileCircleItem
        id="profile-circle-item"
        onClick={() => {
          navigate("/customize");
        }}
      >
        <S.ProfileCircleImage
          id="profile-circle-img"
          src={defaultProfileImage.profileImage}
        />
        {defaultProfileImage.profileName}
      </S.ProfileCircleItem>
      <S.ProfileChangeButton
        id="profile-change-button"
        onClick={() => {
          navigate("/profile");
        }}
      >
        🤓
      </S.ProfileChangeButton>
      <S.ProfileSettingButton
        id="profile-setting-button"
        onClick={() => {
          navigate("/customize");
        }}
      >
        ⚙️
      </S.ProfileSettingButton>
    </S.MainProfileCircleWrapper>
  );
};

export default ProfileCircle;
