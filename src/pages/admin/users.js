import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../hooks/useAuth'

export default function users() {
    const { userId, fullName, admin, logout, login } = useAuth();
    const router = useRouter();
    useEffect(()=>{
        if (userId === -1 || admin === false) {
            router.push("/login")
        }
    },[userId]);
    return (
        <>
            <h1>User admin dashboard</h1>
        </> 
    )
}