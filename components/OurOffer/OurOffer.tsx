import React from 'react';
import styles from '@/components/OurOffer/OurOffer.module.css';
import OfferCard from '../OfferCard/OfferCard';

const OurOffer = () => {

    const title = "Que proposons nous ?";
    const offers = [
        {
            title: "Art de la table 🍽️",
            image: "/assets/illustration_tasting.jpeg"
        },
        {
            title: "Épicerie fine 🧀",
            image: "/assets/illustration_tasting.jpeg"
        },
        {
            title: "Cave à vins 🍷",
            image: "/assets/illustration_tasting.jpeg"
        },
        {
            title: "Dégustation 😋",
            image: "/assets/illustration_tasting.jpeg"
        }
    ]



    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {title}
            </div>

            <div className={styles.offers}>
                {offers.map((offer, index) => (
                    <div key={index}>
                        <OfferCard title={offer.title} image={offer.image} />
                    </div>
                ))}
            </div>



        </div>
    );
}
export default OurOffer;