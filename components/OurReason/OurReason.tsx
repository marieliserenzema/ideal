import React from 'react';
import styles from '@/components/OurReason/OurReason.module.css';
import Image from 'next/image';

const OurReason = () => {

    const title = "Notre raison d'être";
    const subtitle = "L'IDÉAL, c'est avant tout une histoire de famille et de valeurs partagées !";
    const descriptions = [
        "Né d'une histoire de famille où reigne convivialité, amour et partage, l'idéal est un peu comme le 4éme enfant de la famille.",
        "Ensemble, ils partagent tous les cinq ce goût de l'authenticité, la passion des choses simples et l'envie de faire vivre une table conviviale pour créer des souvenirs de bon moments partagés en famille ou entre amis 🍻",
        "C'est delà qu'est venu l'idée de créer un lieu unique où se mêlent produit locaux, art de la table et dégustation."
    ];


    return (
        <div className={styles.container}>
            <Image
                src="/assets/illustration.jpeg"
                alt="Description de l'image"
                width={500}
                height={700}
                className={styles.img}
            />


            <div className={styles.text}>
                <div className={styles.title}>
                    {title}
                </div>

                <div className={styles.divider}></div>

                <div className={styles.subtitle}>
                    {subtitle}
                </div>

                {descriptions.map((description, index) => (
                    <div className={styles.description} key={index}>
                        {description}
                    </div>
                ))}



            </div>


        </div>
    );
}
export default OurReason;