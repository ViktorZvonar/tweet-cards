import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

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
        if (res.data.length === 0) {
          alert('No more users with tweets');
          return;
        }
        if (page === 1) {
          setTweets(res.data);
        } else {
          setTweets(prevTweets => [...prevTweets, ...res.data]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <CollectionContainer>
      {tweets.map(tweet => (
        <TweetItem key={nanoid()} tweet={tweet} />
      ))}
      <TweetButton buttonType="loadMore" onClick={handleLoadMore}>
        Load More
      </TweetButton>
    </CollectionContainer>
  );
};

TweetList.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

export default TweetList;
