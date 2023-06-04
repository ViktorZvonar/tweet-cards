import React from 'react';
import Wrapper from 'shared/Wrapper/Wrapper';

import { Link } from './HomePage.styles';

const HomePage = () => {
  return (
    <Wrapper>
      <Link to="/tweets">Go to Tweets</Link>
    </Wrapper>
  );
};

export default HomePage;
