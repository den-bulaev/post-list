import React from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';

const PostList = ({ posts, setSelectedPostId }) => {
  const handleClickOpen = (event) => {
    setSelectedPostId(event.target.dataset.postid);
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
  setSelectedPostId: PropTypes.func.isRequired,
};

PostList.defaultProps = {
  posts: [],
};

export default React.memo(PostList);
