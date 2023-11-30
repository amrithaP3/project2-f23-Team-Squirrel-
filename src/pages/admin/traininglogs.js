import React, { useState, useEffect } from 'react';
import styles from '../../styles/TrainingDashboard.module.css';
import Sidebar from '../../components/Sidebar';
import style1 from '@/styles/AdminTL.module.css';
import TrainingLog from '@/components/TrainingLog';
import SearchHeaderComponent from '@/components/SearchHeaderComponent';

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
            <div className={style1.contents}>
                <Sidebar selected="ATL"/>
                <h1>TrainingLogs Admin dashboard</h1>
            
            <div className={styles.dashboard}>
                <h1 className={styles.title}>Training Logs</h1>
                <div className={styles.logList}>
                    {trainingLogs.length > 0 ? (
                        trainingLogs.map((log, index) => (
                            <TrainingLog key={index} user={log.user} animal={log.animal} title={log.title} date={log.date} description={log.description} hours={log.hours} />
                        ))
                    ) : (
                        <div className={styles.noLogs}>No training logs available.</div>
                    )}
                </div>

            </div>

            </div> 
        </div>
    );
}
// trainingLogs.map(log => {
                    //     const { day, month, year } = formatDateComponents(log.date);
                    //     return (
                    //         <div key={log._id} className={styles.logItem}>
                    //             <div className={styles.dateContainer}>
                    //                 <p className={styles.day}>{day}</p>
                    //                 <p className={styles.monthYear}>{`${month} - ${year}`}</p>
                    //             </div>
                    //             <div className={styles.logDetails}>
                    //                 <p className={styles.logTitle}>{log.title} • {log.hours} hours</p>
                    //                 <p className={styles.logDescription}>{log.description}</p>
                    //             </div>
                    //         </div>
                    //     );
                    // })
                    
                    
    // const formatDateComponents = (dateString) => {
    //     const date = new Date(dateString);
    //     return {
    //         day: date.getDate(),
    //         month: date.getMonth() + 1,
    //         year: date.getFullYear()
    //     };
    // };
