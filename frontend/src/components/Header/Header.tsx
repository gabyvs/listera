import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.title}>
        <div>Listera</div>
      </a>
    </header>
  );
};

export default Header;
