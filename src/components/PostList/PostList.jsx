import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { deletePost, getPosts } from '../../Api/posts';

import './PostList.scss';

const PostList = ({
  setSelectedPostId, selectedPostId,
}) => {
  const [posts, setPosts] = useState([]);
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    getPosts()
      .then((response) => setPosts(response));
  }, [reRender]);

  const handleClickOpen = (event) => {
    const id = event.target.dataset.postId;

    setSelectedPostId(+id);
  };

  const handleClickClose = () => {
    setSelectedPostId(0);
  };

  const onDelete = async (event) => {
    await deletePost(event.target.dataset.postId);
    await getPosts()
      .then((result) => setPosts(result));

    setReRender(!reRender);
  };

  const debouncedDelete = () => debounce(onDelete, 500);

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
              onClick={id === selectedPostId ? handleClickClose : handleClickOpen}
            >
              {id === selectedPostId ? 'close' : 'open'}
            </button>

            <button
              data-post-id={id}
              className="list__button list__delete"
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
  setSelectedPostId: PropTypes.func.isRequired,
  selectedPostId: PropTypes.number.isRequired,
};

export default React.memo(PostList);
