import React, { useState } from 'react';
import styles from '../styles/style.module.css';
import Link from 'next/link'; 
import Image from 'next/image';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Login submitted:', { email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles['page-header']}>
        <div className={styles['header-content']}>
          <Image src="/applogo.png" alt="App Logo" width={100} height={100} className={styles.appLogo} />
          <div className={styles.heading1}>Progress</div>
        </div>
      </div>
      <div className={styles['gray-line']}></div>
      <div className={styles['red-quarter-circle']}></div>

      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.heading}>Login</div>
        <div className={styles['input-container']}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles['input-line']}></div>
        </div>
        <div className={styles['input-container']}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles['input-line']}></div>
        </div>
        <button type="submit" className={styles['signup-button']}>
          Login
        </button>
      </form>

      <div className={styles['have-account']}>
        Don't have an account?{' '}
        <Link href="/createaccount">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
