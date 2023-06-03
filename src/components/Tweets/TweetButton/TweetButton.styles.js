import styled from 'styled-components';

export const FollowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  position: absolute;
  width: 196px;
  height: 50px;
  bottom: 36px;

  transform: translateX(-50%);
  left: 50%;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  background: ${props => (props.isFollowing ? '#5cd3a8' : '#ebd8ff')};

  &:hover {
    background: ${props => (props.isFollowing ? '#4dbf96' : '#d4c1e7')};
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const LoadMoreButton = styled(FollowButton)`
  bottom: -100px;
`;
