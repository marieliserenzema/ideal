import React from 'react';
import styles from '@/components/Schedule/Schedule.module.css';
import Image from 'next/image';

const Schedule = () => {

    const title = "Horaires";
    const subtitle = "Venez nous voir ";
    const marketCategory = "Épicerie fine";
    const marketDescriptions = [
        "Du Mardi au Samedi",
        "9h30 - 12h30",
        "14h30 - 19h00",
    ];
    const tastingCategory = "Dégustation";
    const tastingDescriptions = [
        "Du Jeudi au Samedi",
        "19h00 - 21h30",
    ];


    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.title}>
                    {title.toUpperCase()}
                </div>
                <div className={styles.subtitle}>
                    {subtitle}
                </div>
                <div className={styles.category}>
                    {marketCategory}
                </div>
                {marketDescriptions.map((description, index) => (
                    <div className={styles.description} key={index}>
                        {description}
                    </div>
                ))}
                <div className={styles.category}>
                    {tastingCategory}
                </div>
                {tastingDescriptions.map((description, index) => (
                    <div className={styles.description} key={index}>
                        {description}
                    </div>
                ))}




            </div>

            <Image
                src="/assets/illustration2.jpeg"
                alt="Description de l'image"
                width={500}
                height={700}
                className={styles.img}
            />
        </div>
    );
}
export default Schedule;