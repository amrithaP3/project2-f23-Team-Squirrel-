import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../hooks/useAuth';
import AnimalComponent from '../components/AnimalComponent.js'; // Corrected import

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
        <>
            <h1>Animals dashboard</h1>
            {animals?.map((animal) => {
                    if (true) {
                        return <AnimalComponent animal={animal}/>
                    }
                })}
            {/* display search bar (optional) */}
            {/* display side bar */}
            {/* display top portion of list */}
            {/* display list components filtered by userId */}
        </> 
    )
}

