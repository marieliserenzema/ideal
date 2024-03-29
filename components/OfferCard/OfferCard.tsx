import React from 'react';
import styles from '@/components/OfferCard/OfferCard.module.css';

const OfferCard = ({ title, image }: { title: string, image: string }): React.JSX.Element => {
    return (
        <div className={styles.card}>
            <img
                src={image}
                alt={title}
                className={styles.image}
            />
            <div className={styles.title}>
                {title}
            </div>

        </div>
    );
}
export default OfferCard;