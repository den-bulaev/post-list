import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { deletePost, getPosts } from '../../Api/posts';

import './PostList.scss';

const PostList = ({
  setSelectedPostId, selectedPostId, posts, setPosts,
}) => {
  const handleClickOpen = (event) => {
    const id = event.target.dataset.postId;

    setSelectedPostId(+id);
  };

  const debouncedOpen = () => debounce(handleClickOpen, 300);

  const handleClickClose = () => {
    setSelectedPostId(0);
  };

  const debouncedClose = () => debounce(handleClickClose, 300);

  const onDelete = async (event) => {
    await deletePost(event.target.dataset.postId);
    getPosts()
      .then((result) => setPosts(result));
  };

  const debouncedDelete = () => debounce(onDelete, 300);

  return (
    <ul className="PostList">
      {posts.map(({ id, title }) => (
        <li
          className="PostList__item"
          key={id}
        >
          <h2>
            {title}
          </h2>

          <div className="PostList__buttons-container">
            <button
              data-post-id={id}
              className="PostList__button"
              type="button"
              onClick={id === selectedPostId ? debouncedClose() : debouncedOpen()}
            >
              {id === selectedPostId ? 'close' : 'open'}
            </button>

            <button
              data-post-id={id}
              className="PostList__button PostList__delete"
              type="button"
              onClick={debouncedDelete()}
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
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })),
  setPosts: PropTypes.func.isRequired,
  setSelectedPostId: PropTypes.func.isRequired,
  selectedPostId: PropTypes.number.isRequired,
};

PostList.defaultProps = {
  posts: [],
};

export default React.memo(PostList);
