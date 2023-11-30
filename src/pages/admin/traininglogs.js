import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../../hooks/useAuth'
import Sidebar from '../../components/Sidebar';
import styles from '@/styles/AdminTL.module.css';

export default function traininglogs() {
    const { userId, fullName, admin, logout, login } = useAuth();
    const router = useRouter();
    useEffect(()=>{
        if (userId === -1 || admin === false) {
            router.push("/login")
        }
    },[userId]);
    return (
        <div className={styles.contents}>
            <Sidebar selected="ATL"/>
            <h1>TrainingLogs Admin dashboard</h1>
        </div> 
    )
}