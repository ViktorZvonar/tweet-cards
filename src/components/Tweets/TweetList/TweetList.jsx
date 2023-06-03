import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { getTweets } from 'shared/services/TweetApi';

import TweetItem from '../TweetItem/TweetItem';
import { CollectionContainer } from './TweetList.styles';

const TweetList = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTweets(1);
        setTweets(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <CollectionContainer>
      {tweets.map(tweet => (
        <TweetItem key={tweet.id} tweet={tweet} />
      ))}
    </CollectionContainer>
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

export default TweetList;
