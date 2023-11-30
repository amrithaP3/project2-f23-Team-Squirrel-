import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import styles from '../styles/Sidebar.module.css';

const Sidebar = (props) => {
  const { selected } = props;
  const { fullName, admin } = useAuth();

  return (
    <div className={styles.sidebar}>
      <Link href="/traininglogs" className={`${styles.sidebarItem} ${selected === "TL" ? styles.selected : ""}`}>Training logs</Link>
      <Link href="/animals" className={`${styles.sidebarItem} ${selected === "A" ? styles.selected : ""}`}>Animals</Link>
      <div className={styles.horizontalLine}></div>
      {admin && (
        <div className={styles.adminAccess}>
          <div>Admin access</div>
          <Link href="/admin/traininglogs" className={`${styles.adminAccessLink} ${selected === "ATL" ? styles.selected : ""}`}>All training</Link>
          <Link href="/admin/animals" className={`${styles.adminAccessLink} ${selected === "AA" ? styles.selected : ""}`}>All animals</Link>
          <Link href="/admin/users" className={`${styles.adminAccessLink} ${selected === "AU" ? styles.selected : ""}`}>All users</Link>
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
