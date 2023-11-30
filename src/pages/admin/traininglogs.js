import React, { useState, useEffect } from 'react';
import styles from '../../styles/LogDashboard.module.css';
import Sidebar from '../../components/Sidebar';
import TrainingLog from '@/components/TrainingLog';
import SearchHeaderComponent from '@/components/SearchHeaderComponent';
import Link from 'next/link';

export default function TrainingLogs() {
    const [trainingLogs, setTrainingLogs] = useState([]);

    useEffect(() => {
        const fetchTrainingLogs = async () => {
            try {
                const response = await fetch("/api/admin/training");
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const logData = await response.json();
                setTrainingLogs(logData);
            } catch (error) {
                console.error("Error fetching training logs: ", error);
            }
        };
        fetchTrainingLogs();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection:"column"}}>
            <SearchHeaderComponent/>
            <div style={{ display: 'flex' }}>
                <Sidebar selected="ATL"/>
                <main style={{ flex: 1, overflowY: 'auto', maxHeight: '90vh', padding: '20px' }}>
                    <div className={styles.mainHeader}>
                        <h1 className={styles.animalHeading}>Training Logs</h1>
                        <Link href="/createlog">.</Link>
                    </div>
                    <div>
                    {trainingLogs == null || trainingLogs.length > 0 ? (
                        trainingLogs?.map((log, index) => (
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