import React from 'react';

import './NewPost.scss';

const NewPost = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h2 className="form-title">Add new post</h2>

      <form onSubmit={handleSubmit} className="new-post-form">
        <input type="text" />
        <input type="text" />
        <button
          type="submit"
          className="new-post-form__submit-button"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default React.memo(NewPost);
