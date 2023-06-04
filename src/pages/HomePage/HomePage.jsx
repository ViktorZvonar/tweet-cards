import React from 'react';
import Wrapper from 'shared/Wrapper/Wrapper';

import { Link, Title } from './HomePage.styles';

const HomePage = () => {
  return (
    <Wrapper>
      <Title>Welcome</Title>
      <Link to="/tweets">Go to Tweets</Link>
    </Wrapper>
  );
};

export default HomePage;
