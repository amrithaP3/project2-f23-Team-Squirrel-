import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../../hooks/useAuth'
import Sidebar from '../../components/Sidebar';

export default function animals() {
    const { userId, fullName, admin, logout, login } = useAuth();
    const router = useRouter();
    useEffect(()=>{
        if (userId === -1 || admin === false) {
            router.push("/login")
        }
    },[userId]);
    return (
        <>
            <Sidebar selected="AA"/>
            <h1>Animal Admin dashboard</h1>
        </> 
    )
}