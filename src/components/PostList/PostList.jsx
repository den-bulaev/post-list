import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getPost, deletePost } from '../../Api/posts';

import './PostList.scss';

const PostList = ({ posts, setPost, getPosts }) => {
  const [postId, setPostId] = useState(0);

  const handleClickOpen = (event) => {
    const id = event.target.dataset.postId;

    getPost(id)
      .then((response) => setPost(response));
    setPostId(id);
  };

  const handleClickClose = () => {
    setPost(null);
    setPostId(0);
  };

  const onDelete = async (event) => {
    await deletePost(event.target.dataset.postId);

    getPosts();
  };

  return (
    <ul className="list">
      {posts.map(({ id, title }) => (
        <li
          className="list__item"
          key={id}
        >
          <h2>
            {title}
          </h2>

          <div className="list__buttons-container">
            <button
              data-post-id={id}
              className="list__button"
              type="button"
              onClick={id === +postId ? handleClickClose : handleClickOpen}
            >
              {id === +postId ? 'close' : 'open'}
            </button>

            <button
              data-post-id={id}
              className="list__button"
              type="button"
              onClick={onDelete}
            >
              delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })),
  setPost: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
};

PostList.defaultProps = {
  posts: [],
};

export default React.memo(PostList);
