import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tabs from '../components/markdown/Tabs';

const TabsContainer = ({ markdown, updateMarkdown }) => {
  
  return (
    <>
      <Tabs arrayTabs={['thing', 'thing']} />
    </>
  );
}
