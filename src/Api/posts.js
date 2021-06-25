/* eslint-disable import/prefer-default-export */
import { remove, download, add } from './requests';

export const getPosts = () => download('posts');

export const getPost = (id) => download(`posts/${id}?_embed=comments`);

export const deletePost = (postId) => {
  remove(`posts/${postId}`);
};

export const addPost = () => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      title: 'azazazazazazaza',
      body: 'akj;qwerewq; jfip',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  return add('posts', options);
};
