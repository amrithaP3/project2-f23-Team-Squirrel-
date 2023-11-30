import styles from "@/styles/SearchHeader.module.css";
import Image from "next/image";
import searchGlass from "@/images/search.png";
import progressLogo from "@/images/Progress.png";
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth'

export default function SearchHeaderComponent() {
    const {search, setSearch} = useAuth();

    const handleSearchChange = (event) => {
        setSearch(event.target.value.trim().toLowerCase());
    };

    return (
        <div className={styles.SearchHeader}>
            <Image src={progressLogo} alt="Progress Logo" id={styles.progress}/>
            <div className={styles.search}>
                <Image src={searchGlass} alt="Search Icon" id={styles.searchpic}/>
                <input 
                    type="text" 
                    className={styles.text} 
                    placeholder="Search by title or name" 
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    );
}
