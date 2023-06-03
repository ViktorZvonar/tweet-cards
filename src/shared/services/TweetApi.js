import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '',
    'Access-Control-Allow-Methods': '',
    'Access-Control-Allow-Headers': '',
    'Access-Control-Expose-Headers': '',
    'Access-Control-Allow-Credentials': 'false',
    'Access-Control-Max-Age': '0',
  },
});

export const getTweets = async page => {
  try {
    const res = await instance.get(`/?page=${page}&limit=3`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateFollowers = async tweet => {
  try {
    const updatedTweet = {
      ...tweet,
      followers: tweet.followers,
      isFollowing: !tweet.isFollowing,
    };
    const res = await instance.put(`/${tweet.id}`, updatedTweet);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
