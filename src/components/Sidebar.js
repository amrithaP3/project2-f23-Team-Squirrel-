import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import styles from '../styles/Sidebar.module.css';

const Sidebar = (props) => {
  const { selected } = props; // Select will equal TL, A, ATL, AA, or AU to represent which button to highlight
  const { fullName, admin } = useAuth();

  return (
    <div className={styles.sidebar}>
      <Link href="/traininglogs" className={styles.sidebarItem} id={selected == "TL" ? "selected" : ""}>Training logs</Link>
      <Link href="/animals" className={styles.sidebarItem} id={selected == "A" ? "selected" : ""}>Animals</Link>
      {admin && (
        <div className={styles.adminAccess}>
          <div>Admin access</div>
          <Link href="/admin/traininglogs" className={styles.sidebarItem} id={selected == "ATL" ? "selected" : ""}>All training</Link>
          <Link href="/admin/animals" className={styles.sidebarItem} id={selected == "AA" ? "selected" : ""}>All animals</Link>
          <Link href="/admin/users" className={styles.sidebarItem} id={selected == "AU" ? "selected" : ""}>All users</Link>
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
