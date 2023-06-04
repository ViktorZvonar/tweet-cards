import React from 'react';
import Wrapper from 'shared/Wrapper/Wrapper';
import LinkComponent from './../../shared/LinkComponent/LinkComponent';

const HomePage = () => {
  return (
    <Wrapper>
      <LinkComponent linkType="link" to="/tweet-cards">
        Go to Tweets
      </LinkComponent>
    </Wrapper>
  );
};

export default HomePage;
