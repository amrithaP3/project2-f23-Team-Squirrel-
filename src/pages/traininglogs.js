import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../hooks/useAuth'

export default function traininglogs() {
    const { userId, fullName, admin, toggleLogin } = useAuth();
    const router = useRouter();
    useEffect(()=>{
        if (userId === -1) {
            router.push("/login");
        }
    },[]);

    return (
        <p>training log</p>
    )
}