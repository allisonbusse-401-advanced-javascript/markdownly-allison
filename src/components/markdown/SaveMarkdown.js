import React from 'react';
import PropTypes from 'prop-types';

const SaveMarkdown = ({ handleAdd, handleChange, tabName, tabNames }) => {
  return (
    <>
    <input value={tabName} onChange={handleChange} placeholder="Name of File"></input>
    <button onClick={() => handleAdd(tabName, tabNames)}>Add Tab</button>
    </>
  );
};

SaveMarkdown.propTypes = {
  handleAdd: PropTypes.func,
  handleChange: PropTypes.func,
  tabName: PropTypes.string,
  tabNames: PropTypes.array
};

export default SaveMarkdown;



