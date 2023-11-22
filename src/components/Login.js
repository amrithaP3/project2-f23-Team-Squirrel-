// components/Login.js
import React, { useState } from 'react';
import styles from '../styles/CreateAccount.module.css';
import Link from 'next/link'; // Import Link from 'next/link'
import Image from 'next/image';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here (e.g., send credentials to a server)
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles['page-header']}>
        <div className={styles['header-content']}>
          <Image src="/applogo.png" alt="App Logo" width={100} height={100} className={styles.appLogo} />
          <div className={styles.heading}>Progress</div>
        </div>
      </div>
      <div className={styles['gray-line']}></div>

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

      <div className={styles['dont-have-account']}>
        Don't have an account?{' '}
        <Link href="/createaccount">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
