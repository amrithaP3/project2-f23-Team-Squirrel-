import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
import styles from '../../src/styles/TrainingDashboard.module.css';
import Animal from '../../server/mongodb/models/Animal';
import connectDB from '../../server/mongodb';
import { useAuth } from '@/hooks/useAuth';
import editButton from "../images/editButton.png"

export default function TrainingLog(props) {

    const { userId, admin, fullName, login, logout } = useAuth();
    const { user, title, animal, date, description, hours } = props;

    function formatDateComponents(dateString) {
        // Create a Date object from the string
        const date = new Date(dateString);
      
        // Extract day, month, and year
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
      
        return { day, month, year };
      }

    // works for Format: YYYY-MM-DD
    const components = formatDateComponents(date);
    
    let month;
    switch (components.month) {
        case 1:
            month = 'Jan';
        case 2:
            month = 'Feb';
        case 3:
            month = 'Mar';
        case 4:
            month = 'Apr';
        case 5:
            month = 'May';
        case 6:
            month = 'Jun';
        case 7:
            month = 'Jul';
        case 8:
            month = 'Aug';
        case 9:
            month = 'Sep';
        case 10:
            month = 'Oct';
        case 11:
            month = 'Nov';
        case 12:
            month = 'Dec';
    }

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        async function fetchAnimals() {
            try {
                const res = await fetch("/api/admin/animals");
                if (!res.ok) {
                    throw new Error('Failed to fetch animals');
                }
                const data = await res.json();
                const specificAnimal = data.filter(an => {
                    if (an._id === animal) {
                        return an;
                    }
                })
                console.log(specificAnimal);
                setAnimals(specificAnimal);
            } catch (error) {
                console.error('Error fetching animals:', error);
            }
        }
        if (userId !== -1) {
            fetchAnimals();
        }
    }, [userId]);

    let breed;
    let name;

    animals.forEach(animal => {
        breed = animal.breed;
        name = animal.name;
    })
    
    return (
        <div className={styles.all}>
            <div className={styles.fourSides}>
                <div className={styles.threeSides}>
                    <div className={styles.leftSide}>
                        <p className={styles.date}>{components.day}</p>
                        <p className={styles.monthYear}>{month} - {components.year}</p>
                    </div>
                    <div className={styles.moreInfo}>
                        <div className={styles.allInfo}>
                            <div className={styles.info}>
                                <div className={styles.top}>
                                    <p className={styles.heading}>{title}</p>
                                    <p className={styles.dot}> • </p>
                                    <p className={styles.num}>{hours} </p>
                                    <p className={styles.hours}>{hours !== 1 ? (<p> hours</p>) : (<p> hour</p>)}</p>
                                </div>
                                <div className={styles.bottom}>{fullName} - {breed} - {name}</div>
                            </div>
                            <p className={styles.desc}>{description}</p>
                        </div>
                    </div>
                </div>
                    <Image 
                        className={styles.editButton}
                        src={editButton}
                        width={55}
                    />
            </div>
        </div>
    );
}