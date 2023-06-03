import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { getTweets } from 'shared/services/TweetApi';

import TweetItem from '../TweetItem/TweetItem';

import TweetButton from '../TweetButton/TweetButton';
import { CollectionContainer } from './TweetList.styles';

const TweetList = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTweets(page);
        setTweets(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <CollectionContainer>
      {tweets.map(tweet => (
        <TweetItem key={tweet.id} tweet={tweet} />
      ))}
      <TweetButton buttonType="loadMore" onClick={handleLoadMore}>
        Load More
      </TweetButton>
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
