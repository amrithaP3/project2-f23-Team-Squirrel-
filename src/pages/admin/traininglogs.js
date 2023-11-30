import React, { useState, useEffect } from 'react';
import styles from '../../styles/TrainingDashboard.module.css';
import Sidebar from '../../components/Sidebar';
import style1 from '@/styles/AdminTL.module.css';

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

    const formatDateComponents = (dateString) => {
        const date = new Date(dateString);
        return {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        };
    };

    return (
        <div className={style1.contents}>
            <Sidebar selected="ATL"/>
            <h1>TrainingLogs Admin dashboard</h1>
        
        <div className={styles.dashboard}>
            <h1 className={styles.title}>Training Logs</h1>
            <div className={styles.logList}>
                {trainingLogs.length > 0 ? (
                    trainingLogs.map(log => {
                        const { day, month, year } = formatDateComponents(log.date);
                        return (
                            <div key={log._id} className={styles.logItem}>
                                <div className={styles.dateContainer}>
                                    <p className={styles.day}>{day}</p>
                                    <p className={styles.monthYear}>{`${month} - ${year}`}</p>
                                </div>
                                <div className={styles.logDetails}>
                                    <p className={styles.logTitle}>{log.title} • {log.hours} hours</p>
                                    <p className={styles.logDescription}>{log.description}</p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className={styles.noLogs}>No training logs available.</div>
                )}
            </div>
        </div>

        </div> 
    );
}
