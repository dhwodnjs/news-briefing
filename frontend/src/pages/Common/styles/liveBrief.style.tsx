import styled, { keyframes } from "styled-components";

const popIn = keyframes`
  0% {
    transform: scale(0) translate(var(--translateX), var(--translateY));
    opacity: 0;
  }
  40% {
    transform: scale(1.1) translate(var(--translateX), var(--translateY));
    opacity: 1;
  }
  100% {
    transform: scale(1) translate(var(--translateX), var(--translateY));
  }
`;

export const LiveLoaderBox = styled.div`
  grid-column: 1 / 3;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LiveBriefBox = styled.div`
  --translateX: -50%;
  --translateY: -50%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;

  position: absolute;
  width: 70%;
  height: 70%;

  top: 50%;
  left: 50%;

  transform: translate(var(--translateX), var(--translateY));

  border-radius: 20px;
  background-color: white;
  font-size: 18px;

  box-shadow: 0px 0px 40px 20px darkgray;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 45px;

  animation: ${popIn} 1s ease;
  animation-delay: 0.1s;
  animation-fill-mode: backwards;
`;

export const LiveBriefImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  grid-column: 1 / 2;
  border-radius: 12px;
  margin: 10px;
`;

export const LiveBriefImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  border-radius: 12px;

  justify-self: center;
  align-self: center;

  object-fit: contain;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
`;

export const LiveBriefContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-rows: minmax(0, 1fr) minmax(0, 2fr);
  align-items: center;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  gap: 20px;
}
`;

export const LiveBriefTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const LiveBriefContent = styled.div`
  display: flex;
  oveflow: hidden;
  font-size: 18px;
  overflow: hidden;
  padding-bottom: 20px;
`;

export const ExitButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  box-shadow:
    0px 1.5px 3px rgba(0, 0, 0, 0.16),
    0px 1.5px 3px rgba(0, 0, 0, 0.23);
  background: lightcoral;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    width: 32px;
    height: 32px;
    top: 14px;
    right: 14px;
  }
`;
