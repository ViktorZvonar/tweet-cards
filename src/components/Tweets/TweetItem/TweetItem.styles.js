import styled from 'styled-components';

import picture from '../../../images/picture.png';
import picture2x from '../../../images/picture@2x.png';

export const Card = styled.div`
  position: relative;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    height: 8px;
    width: 100%;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    z-index: 1;
  }
`;

export const AvatarContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  z-index: 2;

  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  position: absolute;
  bottom: 112px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const BackgroundFeature = styled.div`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
  z-index: 999;
  background-image: url(${picture});
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${picture2x});
  }
`;
