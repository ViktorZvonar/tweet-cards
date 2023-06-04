import React from 'react';
import Wrapper from 'shared/Wrapper/Wrapper';

import { Title } from './NotFoundPage.styles';
import LinkComponent from './../../shared/LinkComponent/LinkComponent';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Title>Page not found</Title>
      <LinkComponent linkType="link" to="/tweet-cards">
        To home page
      </LinkComponent>
    </Wrapper>
  );
};

export default NotFoundPage;
