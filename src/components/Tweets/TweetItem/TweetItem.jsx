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

const TweetItem = ({ tweet }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(tweet.followers);

  const handleFollowButtonClick = () => {
    if (isFollowing) {
      setFollowerCount(prevCount => prevCount - 1);
    } else {
      setFollowerCount(prevCount => prevCount + 1);
    }
    setIsFollowing(prevFollowing => !prevFollowing);
  };

  return (
    <Card>
      <BackgroundFeature />
      <AvatarContainer>
        <Avatar src={tweet.avatar} alt={`${tweet.user}'s avatar`} />
      </AvatarContainer>
      <UserInfo>
        <p>{tweet.tweets} tweets</p>
        <p>{numeral(followerCount).format('0,0')} followers</p>
      </UserInfo>

      <TweetButton
        isFollowing={isFollowing}
        onClick={handleFollowButtonClick}
      />

      {/* <div className="tweets">
        {user.tweets.map(tweet => (
          <div key={tweet.id} className="tweet">
            <p>{tweet.content}</p>
            <p>{tweet.timestamp}</p>
          </div>
        ))}
      </div> */}
    </Card>
  );
};

TweetItem.propTypes = {
  tweet: PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.string,
    tweets: PropTypes.number,
    followers: PropTypes.number,
    avatar: PropTypes.string,
  }).isRequired,
};

export default TweetItem;
