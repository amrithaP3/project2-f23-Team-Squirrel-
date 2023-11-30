import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../hooks/useAuth';
import TrainingLogs from '@/components/TrainingLogs';
import AnimalComponent from '../components/AnimalComponent.js';
import Sidebar from '../components/Sidebar';

export default function TrainingLogsPage() {
    const { userId } = useAuth();
    const [animals, setAnimals] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (userId === -1) {
            router.push("/login");
        }
    }, [userId]);

    useEffect(() => {
        async function fetchAnimals() {
            try {
                const res = await fetch("/api/admin/animals");
                if (!res.ok) {
                    throw new Error('Failed to fetch animals');
                }
                const data = await res.json();
                console.log('Fetched animals:', data);
                setAnimals(data);
            } catch (error) {
                console.error('Error fetching animals:', error);
            }
        }

        if (userId !== -1) {
            fetchAnimals();
        }
    }, [userId]);

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar selected="TL"/>
            <main style={{ flex: 1 }}>
                <h1>TrainingLogs dashboard</h1>
                <TrainingLogs />
                {animals?.map((animal) => (
                    <AnimalComponent key={animal._id} animal={animal} />
                ))}
                {/* display search bar */}
                {/* display side bar */}
                {/* display top portion of list */}
                {/* display list components filtered by userId */}
            </main>
        </div> 
    );
}