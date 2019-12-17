import API from './api';

const getPostList = async () => {
  try {
    const posts = await API.get(`posts`);
    return [...posts.data];
  } catch (err) {
    return err;
  }
};

export const TestService = {
  getPostList: getPostList,
};
