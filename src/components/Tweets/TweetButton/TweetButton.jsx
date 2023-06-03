import React from 'react';
import PropTypes from 'prop-types';
import { FollowButton, LoadMoreButton } from './TweetButton.styles';

const TweetButton = ({ children, onClick, isFollowing, buttonType }) => {
  const ButtonComponent =
    buttonType === 'follow' ? FollowButton : LoadMoreButton;
  return (
    <ButtonComponent isFollowing={isFollowing} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
};

TweetButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool,
  buttonType: PropTypes.oneOf(['follow', 'loadMore']).isRequired,
};

export default TweetButton;
