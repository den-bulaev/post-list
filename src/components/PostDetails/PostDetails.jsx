import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getPost } from '../../Api/posts';
import Comments from '../Comments/Comments';

const PostDetails = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(postId)
      .then((result) => setPost(result));
  }, []);

  return post && (
    <div className="post">
      <h2 className="post__title">
        {post.title}
      </h2>

      <p className="post__body">
        {post.body}
      </p>

      <Comments comments={post.comments} />
    </div>
  );
};

PostDetails.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default React.memo(PostDetails);
