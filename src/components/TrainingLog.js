import React, { useState } from 'react';
import styles from '../styles/style.module.css';
import Link from 'next/link'; 
import Image from 'next/image';

export default function TrainingLog(props) {
    return (
        <div className="all">
            <div id="threeSides">
                <div id="leftSide">
                    <p id="date"></p>
                    <p id="monthYear"></p>
                </div>
                <div id="allInfo">
                    <div id="info">
                        <div id="heading">
                            <p id="title">{}</p>
                            <p id="dot">•</p>
                            <p id="hours">{}</p>
                        </div>
                        <div id="bottomInfo">
                            <p id="userName">{}</p>
                            <p id="dash">-</p>
                            <p id="breed">{}</p>
                            <p id="dash">-</p>
                            <p id="animalName">{}</p>
                        </div>
                    </div>
                    <p id="desc">{}</p>
                </div>
                <button id="edit" alt="edit"></button>
            </div>
        </div>
    );
}