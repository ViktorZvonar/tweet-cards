import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getTweets = async page => {
  try {
    const res = await instance.get(`/?page=${page}&limit=3`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
