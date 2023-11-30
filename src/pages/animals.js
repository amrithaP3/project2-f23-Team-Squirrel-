import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../hooks/useAuth';
import AnimalComponent from '../components/AnimalComponent.js';
import Link from 'next/link';
import SearchHeaderComponent from '@/components/SearchHeaderComponent';
import Sidebar from '../components/Sidebar';

export default function Animals() {
    const { userId, search } = useAuth();
    const [animals, setAnimals] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (userId === -1) {
            router.push("/login");
        }
    }, [userId]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("/api/admin/animals");
            const data = await response.json();
            const filteredAnimals = data.filter(animal => 
                animal.name.toLowerCase().startsWith(search.toLowerCase())
            );
            setAnimals(filteredAnimals);
        }
        if (userId !== -1) {
            getData();
        }
    }, [userId, search]);

    return (
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <SearchHeaderComponent/>
            <div style={{ display: 'flex' }}>
                <Sidebar selected="A"/>
                <main style={{ flex: 1, overflowY: 'auto', maxHeight: '90vh', padding: '20px' }}>
                    <h1>Animals dashboard</h1>
                    <Link href="/createanimal">Create Animal here!</Link>
                    <div>
                        {animals?.map((animal, index) => (
                            <AnimalComponent key={index} animal={animal}/>
                        ))}
                    </div>
                </main>
            </div> 
        </div>
    )
}
