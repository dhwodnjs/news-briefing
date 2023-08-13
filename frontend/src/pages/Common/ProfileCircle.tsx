import React from 'react';
import * as S from '../styles';

const ProfileCircle = () => {
  /**
   * ProfileCircle should contain user's profile image.
   * Assume that user's profile image is stored in the server.
   * For now, assume the image is at the public folder.
   */
  return (
    <S.ProfileCircleWrapper>
      <S.ProfileImage />
      ProfileCircle
    </S.ProfileCircleWrapper>
  );
};

export default ProfileCircle;
