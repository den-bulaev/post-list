import React from 'react';
import PropTypes from 'prop-types';

const PostDetails = ({ body, title }) => (
  <div className="post">
    <h2 className="post__title">
      {title}
    </h2>

    <p className="post__body">
      {body}
    </p>
  </div>
);

PostDetails.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default React.memo(PostDetails);
