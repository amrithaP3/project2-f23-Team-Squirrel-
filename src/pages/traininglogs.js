import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../hooks/useAuth'

export default function traininglogs() {
    const { userId, fullName, admin, logout, login } = useAuth();
    const router = useRouter();
    useEffect(()=>{
        if (userId === -1) {
            router.push("/login")
        }
    },[userId]);
    console.log(userId);
    return (
        <>
            <h1>TrainingLogs dashboard</h1>
            {/* display search bar */}
            {/* display side bar */}
            {/* display top portion of list */}
            {/* display list components filtered by userId */}
        </> 
    )
}