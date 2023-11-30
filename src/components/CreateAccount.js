///Random comment test
import React, { useState } from 'react';
import styles from '../styles/style.module.css';
import Image from 'next/image';
import Link from 'next/link';

const CreateAccount = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmpass) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ fullName, email, password, confirmpass, admin }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(res);

      const data = await res.json();

      if (res.ok) {
        console.log('User created successfully:', data);
      } else {
        console.error('Error creating account:', data);
        setError('An error occurred while creating the account');
      }
    } catch (error) {
      console.error('Error creating account:', error);
      setError('An error occurred while creating the account');
    }
  };

  const handleAdmin = () => {
    setAdmin((prevIsAdmin) => !prevIsAdmin);
  };

  return (
    <div className={styles.container}>
      <div className={styles['red-quarter-circle']}></div>
      <form onSubmit={handleFormSubmit} className={styles.container}>
        <div className={styles.heading}>Create Account</div>
        <div className={styles['input-container']}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
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
              name="admin"
              checked={admin}
              onChange={handleAdmin}
            />
            {"  "}Are you an admin?
          </label>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" className={styles['signup-button']}>
          Sign Up
        </button>
      </form>
      <div className={styles['have-account']}>
        Already have an account?
        <Link href="/login" style={{ fontWeight: 'bold', marginLeft:"5px", color:"red"}}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default CreateAccount;
