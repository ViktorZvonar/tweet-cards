import React from 'react';
import Wrapper from 'shared/Wrapper/Wrapper';

import { Link, Title } from './NotFoundPage.styles';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Title>No such page</Title>
      <Link to="/">To home page</Link>
    </Wrapper>
  );
};

export default NotFoundPage;
