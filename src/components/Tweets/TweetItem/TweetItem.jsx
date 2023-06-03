import React, { useState } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

import {
  Card,
  AvatarContainer,
  Avatar,
  UserInfo,
  BackgroundFeature,
} from './TweetItem.styles';

import TweetButton from '../TweetButton/TweetButton';

import { updateFollowers } from 'shared/services/TweetApi';

const TweetItem = ({ tweet }) => {
  const [isFollowing, setIsFollowing] = useState(tweet.isFollowing);

  const handleFollowButtonClick = async () => {
    setIsFollowing(!isFollowing);

    if (isFollowing) {
      tweet.followers -= 1;
    } else {
      tweet.followers += 1;
    }

    try {
      await updateFollowers(tweet);
    } catch (error) {
      console.log('Error updating followers:', error);
    }
  };

  return (
    <Card>
      <BackgroundFeature />
      <AvatarContainer>
        <Avatar src={tweet.avatar} alt={`${tweet.user}'s avatar`} />
      </AvatarContainer>
      <UserInfo>
        <p>{tweet.tweets} tweets</p>
        <p>{numeral(tweet.followers).format('0,0')} followers</p>
      </UserInfo>

      <TweetButton
        buttonType="follow"
        isFollowing={isFollowing}
        onClick={handleFollowButtonClick}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </TweetButton>
    </Card>
  );
};

TweetItem.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.string,
    tweets: PropTypes.number,
    followers: PropTypes.number,
    avatar: PropTypes.string,
  }).isRequired,
};

export default TweetItem;
