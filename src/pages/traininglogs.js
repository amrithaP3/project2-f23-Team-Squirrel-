import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../hooks/useAuth';
import AnimalComponent from '../components/AnimalComponent.js'; // Corrected import

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
        }
        data();
        console.log(animals)
    },[])

    return (
        <>
            <h1>TrainingLogs dashboard</h1>
            {animals?.map((animal) => {
                    if (true) {
                        return <AnimalComponent animal={animal} key={animal._id}/>
                    }
                })}
            {/* display search bar (optional) */}
            {/* display side bar */}
            {/* display top portion of list */}
            {/* display list components filtered by userId */}
        </> 
    )
}

