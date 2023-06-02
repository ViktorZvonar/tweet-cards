import React from 'react';

import TweetItem from '../TweetItem/TweetItem';
import userData from '../TweetItem/users.json';

import { CollectionContainer } from './TweetList.styles';

const TweetList = () => (
  <CollectionContainer>
    {userData.users.map(user => (
      <TweetItem key={user.id} userId={user.id} />
    ))}
  </CollectionContainer>
);

export default TweetList;
