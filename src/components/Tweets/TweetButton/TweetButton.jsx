import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './TweetButton.styles';

const TweetButton = ({ isFollowing, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <Button
      isFollowing={isFollowing}
      isActive={isActive}
      onClick={handleButtonClick}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </Button>
  );
};

TweetButton.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TweetButton;
