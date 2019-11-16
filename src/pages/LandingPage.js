import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/App.css';

function LandingPage() {

  return (
    <div className={styles.App}>
      <h1>Markdown Editor</h1>
      <Link to='/editor'><button>Write some Markdown</button></Link>
    </div>
  );
}

export default LandingPage;
