"use client";
import React, { useState } from 'react';
import styles from '../styles/style.module.css';
import Link from 'next/link'; 
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'

const Login = () => {
  const { userId, fullName, admin, logout, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/user/verify", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data)
        if (data) {
          login(data);
          router.push("./traininglogs");
        } else {
          alert("Email and password are wrong!");
        }
      } else {
        alert("Email or password are wrong!");
      }
    } catch (e) {
      alert("An error occurred while logging in");
    }
  };
  

  return (
    <div className={styles.container}>
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
        <button
          type="submit"
          className={styles['signup-button']}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
>
          Login
        </button>

      </form>

      <div className={styles['have-account']}>
        Don't have an account?{' '}
        <Link href="/createaccount" style={{ fontWeight: 'bold', color:"red"}}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
