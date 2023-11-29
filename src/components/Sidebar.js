import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const { fullName, admin } = useAuth();

  return (
    <div className={styles.sidebar}>
      <Link href="/traininglogs" className={styles.sidebarItem}>Training logs</Link>
      <Link href="/animals" className={styles.sidebarItem}>Animals</Link>
      {admin && (
        <div className={styles.adminAccess}>
          <div>Admin access</div>
          <Link href="/all-training" className={styles.sidebarItem}>All training</Link>
          <Link href="/all-animals" className={styles.sidebarItem}>All animals</Link>
          <Link href="/all-users" className={styles.sidebarItem}>All users</Link>
        </div>
      )}
      <div className={styles.userInfo}>
        <div className={styles.userIcon}>L</div>
        <div>
          <div className={styles.userName}>{fullName}</div>
          <div className={styles.userRole}>{admin ? 'Admin' : 'User'}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
