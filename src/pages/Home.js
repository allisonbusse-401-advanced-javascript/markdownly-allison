import React from 'react';
import Document from '../containers/Document';
import styles from './Home.css';
import TabsNavContainer from '../containers/TabsContainer';
import SaveMarkdownContainer from '../containers/SaveMarkdownContainer';

const Home = () => {
 
  return (
    <>
      <h1 className={styles.Home}>Markdown Editor</h1>
      <SaveMarkdownContainer />
      <TabsNavContainer />
      <Document />
    </>
  );
};

export default Home;
