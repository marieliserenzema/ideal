import React from 'react';
import styles from '@/components/Footer/Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    const title = "L'idéal";
    const emailAddress = "l'ideal47@hotmail.fr"
    const phoneNumber = '05 53 41 78 76'

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleMailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.row2}>
                    <FontAwesomeIcon icon={faPhone} style={{ fontSize: '20px', color: 'brown', paddingRight: '10px' }} />
                    <a href={`tel:${phoneNumber}`} onClick={handlePhoneClick}>
                        {phoneNumber}
                    </ a>
                </div>
                <div className={styles.row2}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', color: 'brown', paddingRight: '10px' }} />
                    <a href={`mailto:${emailAddress}`} onClick={handleMailClick}>
                        {emailAddress}
                    </a>
                </div>

            </div>


            <div>
                @ 2024 par {title}. Créé par ml.
            </div>

        </div>
    );
}
export default Footer;