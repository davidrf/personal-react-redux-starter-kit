import React from 'react';
import styles from './styles.css';

const Header = () => (
  <div className={styles.root}>
    <h1>Hi</h1>
    <nav>
      <ul className={styles.list}>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  </div>
);

export default Header;
