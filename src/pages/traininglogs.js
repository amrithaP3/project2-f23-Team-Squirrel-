import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../hooks/useAuth'
import TrainingLogs from '@/components/TrainingLogs';
import AnimalComponent from '../components/AnimalComponent.js';

export default function traininglogs() {
    const { userId } = useAuth();
    const [ animals, setAnimals ] = useState(null)
    const router = useRouter();

    useEffect(() => {
        if (userId === -1) {
            router.push("/login");
        }
    }, [userId]);

    useEffect(() => {
        async function data() {
            const res = await fetch("/api/admin/animals")
            const data = await res.json()
            setAnimals(data);
    },[userId]);
    console.log("userid is this:" + userId);
    return (
        <>
            <h1>TrainingLogs dashboard</h1>
            <TrainingLogs />
            {/* display search bar */}
            {/* display side bar */}
            {/* display top portion of list */}
            {/* display list components filtered by userId */}
        </> 
    )
}

