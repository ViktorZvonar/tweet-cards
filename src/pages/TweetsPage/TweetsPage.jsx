import React from 'react';

import Wrapper from 'shared/Wrapper/Wrapper';
import TweetList from '../../components/Tweets/TweetList/TweetList';
import LinkComponent from 'shared/LinkComponent/LinkComponent';

const TweetPage = () => {
  return (
    <Wrapper>
      <LinkComponent to="/tweet-cards">Back</LinkComponent>
      <TweetList />
    </Wrapper>
  );
};

export default TweetPage;
