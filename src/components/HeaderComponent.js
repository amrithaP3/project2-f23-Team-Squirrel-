import React from 'react';
import Image from 'next/image';
import styles from '../styles/style.module.css';

const HeaderComponent = () => {
  return (
    <div className={styles['page-header']}>
      <div className={styles['header-content']}>
        <Image src="/applogo.png" alt="App Logo" width={100} height={100} className={styles.appLogo} />
        <div className={styles['heading-words']}>Progress</div>
      </div>
      <div className={styles['gray-line']}></div>
    </div>
  );
};

export default HeaderComponent;
