/* eslint-disable import/prefer-default-export */
import { remove, download, add } from './requests';

export const getPosts = () => download('posts');

export const getPost = (id) => download(`posts/${id}?_embed=comments`);

export const deletePost = (postId) => {
  remove(`posts/${postId}`);
};

export const addPost = (options) => add('posts', options);
