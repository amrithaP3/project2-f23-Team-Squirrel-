import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../hooks/useAuth';
import AnimalComponent from '../components/AnimalComponent.js';
import Link from 'next/link';

import Sidebar from '../components/Sidebar';

export default function animals() {
    const { userId, fullName, admin, logout, login } = useAuth();
    const [ animals, setAnimals ] = useState(null)
    const router = useRouter();

    useEffect(() => {
        if (userId === -1) {
            router.push("/login");
        }
    }, [userId]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("/api/admin/animals")
            const data = await response.json()
            setAnimals(data)
        }
        getData();
    },[])

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar selected="A"/>
            <main style={{ flex: 1 }}>
                <h1>Animals dashboard</h1>
                <Link href="/createanimal">
                Create Animal here!
            </Link>
                {animals?.map((animal) => {
                    if (true) {
                        return <AnimalComponent animal={animal}/>
                    }
                })}
                {/* display search bar */}
                {/* display side bar */}
                {/* display top portion of list */}
                {/* display list components filtered by userId */}
            </main>
        </div> 
    )
}

