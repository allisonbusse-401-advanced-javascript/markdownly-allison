import React from 'react';
import Document from '../containers/Document';
import styles from './App.css';

export default function App() {
  return (
    <>
      <h1 className={styles.App}>Markdown Editor</h1>
      <Document />
    </>
  );
}
