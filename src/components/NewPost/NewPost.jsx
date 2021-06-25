import React, { useState } from 'react';

import './NewPost.scss';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const setData = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    switch (fieldName) {
      case 'title':
        setTitle(fieldValue);
        break;

      case 'body':
        setBody(fieldValue);
        break;

      default:
        throw new Error('Unexpected field name');
    }
  };

  return (
    <>
      <h2 className="form-title">Add new post</h2>

      <form onSubmit={handleSubmit} className="NewPost">
        <input
          name="title"
          type="text"
          value={title}
          onChange={setData}
          placeholder="Enter post title"
          required
        />
        <input
          name="body"
          type="text"
          value={body}
          onChange={setData}
          placeholder="Enter post body"
          required
        />
        <button
          type="submit"
          className="NewPost__submit-button"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default React.memo(NewPost);
