/* eslint-disable import/prefer-default-export */
import { remove, download } from './requests';

export const getPosts = (endpoint) => download(endpoint);

export const getPost = (id) => download(`posts/${id}?_embed=comments`);

export const deletePost = (postId) => remove(`posts/${postId}`);
