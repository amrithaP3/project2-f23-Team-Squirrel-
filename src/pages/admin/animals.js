import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../../hooks/useAuth';
import AnimalComponent from '../../components/AnimalComponent.js';
import Link from 'next/link';
import SearchHeaderComponent from '@/components/SearchHeaderComponent';
import Sidebar from '../../components/Sidebar';
import styles from '@/styles/AnimalDashboard.module.css'

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
        if (!admin) {
            router.push("/login");
        }
    }, [admin]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("/api/admin/animals")
            const data = await response.json()
            setAnimals(data)
        }
        getData();
    },[])

    return (
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <SearchHeaderComponent/>
            <div style={{ display: 'flex' }}>
                <Sidebar selected="AA"/>
                <main style={{ flex: 1, overflowY: 'auto', maxHeight: '90vh', padding: '20px' }}>
                    <div className={styles.mainHeader}>
                        <h1 className={styles.animalHeading}>Animals</h1>
                        <Link href="/createanimal">.</Link>
                    </div>
                    <div>
                        {animals?.map((animal) => {
                            if (true) {
                                return <AnimalComponent animal={animal}/>
                            }
                        })}
                    </div>
                </main>
            </div> 
        </div>
    )
}
