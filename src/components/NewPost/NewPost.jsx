import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { addPost, getPosts } from '../../Api/posts';

import './NewPost.scss';

const NewPost = ({ setPosts }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    await addPost(options);
    getPosts()
      .then((result) => setPosts(result));

    setBody('');
    setTitle('');
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

NewPost.propTypes = {
  setPosts: PropTypes.func.isRequired,
};

export default React.memo(NewPost);
