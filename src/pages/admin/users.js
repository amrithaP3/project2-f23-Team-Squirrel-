import React, { useState, useEffect } from 'react';
import UserDisplay from '../../components/UserDisplay';
import Sidebar from '../../components/Sidebar';
import SearchHeaderComponent from '@/components/SearchHeaderComponent';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/router';
import styles from '@/styles/AnimalDashboard.module.css'

export default function Users() {
    const { userId, admin } = useAuth();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    // Redirect if not logged in or not admin
    useEffect(() => {
        if (userId === -1 || !admin) {
            router.push("/login");
        }
    }, [userId, admin]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await fetch("/api/admin/users");
                if (!result.ok) throw new Error('Failed to fetch users');
                const userData = await result.json();
                setUsers(userData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <SearchHeaderComponent/>
            <div style={{ display: 'flex' }}>
                <Sidebar selected="AU"/>
                <main style={{ flex: 1, overflowY: 'auto', maxHeight: '90vh', padding: '20px' }}>
                    <div className={styles.mainHeader}>
                        <h1 className={styles.animalHeading}>All Users</h1>
                        <Link href="/createanimal">.</Link>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {users.map(user => (
                            user.fullName && (
                                <UserDisplay key={user._id} data={{ 
                                    fullName: user.fullName,
                                    admin: user.admin 
                                }} style={{ margin: '10px' }}/>
                            )
                        ))}
                    </div>
                </main>
            </div> 
        </div>
    );
}
