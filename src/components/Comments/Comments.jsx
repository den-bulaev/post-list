import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ comments }) => (
  <>
    <h3>Comments:</h3>
    <ul className="comments">
      {comments.map(({ id, body }) => (
        <li key={id}>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  </>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  })),
};

Comments.defaultProps = {
  comments: [],
};

export default React.memo(Comments);
