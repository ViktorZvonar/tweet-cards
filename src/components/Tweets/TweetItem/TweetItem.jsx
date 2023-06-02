import React from 'react';
import PropTypes from 'prop-types';
import userData from './users.json';
import {
  Card,
  AvatarContainer,
  Avatar,
  UserInfo,
  BackgroundFeature,
} from './TweetItem.styles';

const TweetItem = ({ userId }) => {
  const user = userData.users.find(user => user.id === userId);
  const avatarUrl = `https://placekitten.com/200/200`;

  return (
    <Card>
      <BackgroundFeature></BackgroundFeature>
      <AvatarContainer>
        <Avatar src={avatarUrl} alt={`${user.username}'s avatar`} />
      </AvatarContainer>
      <UserInfo>
        <p>{user.tweetsCount} tweets</p>
        <p>{user.followersCount} followers</p>
      </UserInfo>
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
  userId: PropTypes.number.isRequired,
};

export default TweetItem;
