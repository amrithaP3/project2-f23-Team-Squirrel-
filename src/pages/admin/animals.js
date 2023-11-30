import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { useAuth } from '../../hooks/useAuth';
import style1 from '@/styles/AdminTL.module.css';
import Sidebar from '../../components/Sidebar';
import SearchHeaderComponent from '@/components/SearchHeaderComponent';

export default function AnimalsDashboard() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const fetchAnimals = async () => {
            const result = await fetch("/api/admin/animals");
            const animalData = await result.json();
            setAnimals(animalData);
        };

        fetchAnimals();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection:"column"}}>
            <SearchHeaderComponent/>
            <div style={{ backgroundColor: 'white', minHeight: '100vh', color: 'black' }} className={style1.contents}>
                <Sidebar selected="AA"/>
                <div className={style1.mainContent}>
                    <h1 style={{ color: 'black' }}>Animals</h1>
                    <div>
                        {animals.map(animal => (
                            <div key={animal._id} className="animal">
                                <div className="dog_name_letter">
                                    <p className="first_letter" style={{ color: 'black' }}>{animal.name.charAt(0).toUpperCase()}</p>
                                </div>
                                <img className="doggie" src={animal.profilePicture} alt={animal.name} width="350" height="250" />
                                <div className="info">
                                    <div className="animal_info_contents">
                                        <div className="animalNameInfo" style={{ color: 'black' }}>{animal.name} - {animal.breed}</div>
                                        <div style={{ color: 'black' }}>Trained: {animal.hoursTrained} hours</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
