/* eslint-disable import/prefer-default-export */
import request from './request';

export const getPosts = (setPosts) => {
  request('posts', { method: 'GET' })
    .then((response) => setPosts(response));
};

export const getPost = (setPost, id) => {
  request(`posts/${id}`)
    .then((response) => {
      setPost(response);
    });
};
