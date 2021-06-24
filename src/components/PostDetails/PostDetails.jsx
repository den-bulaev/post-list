import React from 'react';
import PropTypes from 'prop-types';

import Comments from '../Comments/Comments';

const PostDetails = ({ body, title, comments }) => (
  <div className="post">
    <h2 className="post__title">
      {title}
    </h2>

    <p className="post__body">
      {body}
    </p>

    <Comments comments={comments} />
  </div>
);

PostDetails.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  })),
};

PostDetails.defaultProps = {
  comments: [],
};

export default React.memo(PostDetails);
