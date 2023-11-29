import React, { useState } from 'react';
import styles from '../styles/style.module.css';
import Image from 'next/image';
import Link from 'next/link';

const CreateAccount = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmpass) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ fullname, email, password, confirmpass, isAdmin }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Assuming that the response contains data or a message about the success/failure of the operation    
    } catch (error) {
      console.error('Error creating account:', error);
      setError('An error occurred while creating the account');
    }
  };

  const handleAdmin = () => {
    setIsAdmin((prevIsAdmin) => !prevIsAdmin);
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
      <form onSubmit={handleFormSubmit} className={styles.container}>
        <div className={styles.heading}>Create Account</div>
        <div className={styles['input-container']}>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            className={styles.input}
          />
          <div className={styles['input-line']}></div>
        </div>
        <div className={styles['input-container']}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={styles.input}
          />
          <div className={styles['input-line']}></div>
        </div>
        <div className={styles['input-container']}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={styles.input}
          />
          <div className={styles['input-line']}></div>
        </div>
        <div className={styles['input-container']}>
          <input
            type="password"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmpass(e.target.value)}
            value={confirmpass}
            className={styles.input}
          />
          <div className={styles['input-line']}></div>
        </div>
        <div className={styles['input-container']}>
          <label>
            <input
              type="checkbox"
              name="isAdmin"
              checked={isAdmin}
              onChange={handleAdmin}
            />
            Are you an admin?
          </label>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" className={styles['signup-button']}>
          Sign Up
        </button>
      </form>
      <div className={styles['have-account']}>
        Already have an account?{' '}
        <Link href="/login">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default CreateAccount;
