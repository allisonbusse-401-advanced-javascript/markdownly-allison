import React from 'react';
import PropTypes from 'prop-types';

const SaveMarkdown = ({ handleAdd }) => {
  return (
    <button onClick={() => handleAdd()}>Add Tab</button>
  );
};

SaveMarkdown.propTypes = {
  handleAdd: PropTypes.func.isRequired
};

export default SaveMarkdown;



