import React, { useState, useEffect } from 'react';
import UserDisplay from '../../components/UserDisplay';
import styles from '@/styles/UserDisplay.module.css';
import style1 from '@/styles/AdminTL.module.css';
import Sidebar from '../../components/Sidebar';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const result = await fetch("/api/admin/users");
            const userData = await result.json();
            setUsers(userData);
        };
        fetchUsers();
    }, []);

    return (
        <div  style={{ backgroundColor: 'white', minHeight: '100vh' }} className={style1.contents}>
            <Sidebar selected="AU" />
            <div className={style1.mainContent} style={{ marginLeft: '200px' }}>
                <h1>Users Admin dashboard</h1>
                <div className={styles.userList}>
                    {users.map(user => (
                        user.fullname && (
                            <UserDisplay key={user._id} data={{ 
                                fullName: user.fullname, 
                                admin: user.isAdmin 
                            }} />
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}
