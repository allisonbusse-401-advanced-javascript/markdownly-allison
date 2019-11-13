import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';

const Tabs = ({ arrayTabs, handleTab }) => {
  const mappedTabs = arrayTabs.map((tab, index)=> {
    return <button key={index} onClick={() => handleTab(tab)}>{tab}</button>;
  });

  return (
    <ul className={styles.Tabs}>
      {mappedTabs}
    </ul>
  );
};

Tabs.propTypes = {
  handleTab: PropTypes.func,
  arrayTabs: PropTypes.array.isRequired
};

export default Tabs;
