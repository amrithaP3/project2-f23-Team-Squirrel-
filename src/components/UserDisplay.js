import React from 'react';
import styles from '@/styles/UserDisplay.module.css';

export default function UserDisplay({ data }) {
    return (
        <div className={styles.card}>
            <div className={styles.user_info}>
                <div className={styles.user_pfp}>
                    <b>{data.fullName?.charAt(0).toUpperCase()}</b>
                </div>
                <div className={styles.user_info_content}>
                    <p className={styles.user_name}><b>{data.fullName}</b></p>
                    <p className={data.admin ? styles.user_identifier : ''}>
                        {data.admin ? 'Admin' : 'User'}
                    </p>
                </div>
            </div>
        </div>
    );
}
