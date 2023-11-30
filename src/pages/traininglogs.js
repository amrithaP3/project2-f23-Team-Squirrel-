import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../hooks/useAuth';
import Sidebar from '../components/Sidebar';
import TrainingLog from '@/components/TrainingLog';
import SearchHeaderComponent from '@/components/SearchHeaderComponent';
import styles from '@/styles/LogDashboard.module.css';
import Link from 'next/link';

export default function TrainingLogsPage() {
    const { userId, search } = useAuth();
    const [logs, setLogs] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (userId === -1) {
            router.push("/login");
        }
    }, [userId]);

    useEffect(() => {
        async function fetchLogs() {
            try {
                const res = await fetch("/api/admin/training");
                if (!res.ok) {
                    throw new Error('Failed to fetch training logs');
                }
                const data = await res.json();
        
                const filteredLogs = data
                    .filter(log => log.user === userId)
                    .filter(log => log.title.toLowerCase().startsWith(search.toLowerCase()));
    
                console.log('Fetched and filtered training logs:', filteredLogs);
                setLogs(filteredLogs);
            } catch (error) {
                console.error('Error fetching training logs:', error);
            }
        }
    
        if (userId !== -1) {
            fetchLogs();
        }
    }, [userId, search]);

    return (
        <div style={{ display: 'flex', flexDirection:"column"}}>
            <SearchHeaderComponent/>
            <div style={{ display: 'flex' }}>
                <Sidebar selected="TL"/>
                <main style={{ flex: 1, overflowY: 'auto', maxHeight: '90vh', padding: '20px' }}>
                    <div className={styles.mainHeader}>
                        <h1 className={styles.animalHeading}>Training Logs</h1>
                        <Link href="/createlog">+ Create new</Link>
                    </div>
                    <div>
                    {logs == null || logs.length > 0 ? (
                        logs?.map((log, index) => (
                            <TrainingLog key={index} user={log.user} animal={log.animal} title={log.title} date={log.date} description={log.description} hours={log.hours} />
                        ))
                    ) : (
                        <div className={styles.noLogs}>No training logs available.</div>
                    )}
                    
                    </div>
                </main>
            </div> 
        </div>
    );
}