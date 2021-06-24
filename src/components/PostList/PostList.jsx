import React from 'react';
import PropTypes from 'prop-types';

import { getPost } from '../../Api/posts';

import './PostList.scss';

const PostList = ({ posts, setPost }) => {
  const handleClickOpen = (event) => {
    const id = event.target.dataset.postId;

    getPost(setPost, id);
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

          <button
            data-post-id={id}
            className="list__open-button"
            type="button"
            onClick={handleClickOpen}
          >
            open
          </button>
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
};

PostList.defaultProps = {
  posts: [],
};

export default React.memo(PostList);
