import React from 'react';
import styles from '@/components/SocialMedia/SocialMedia.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const SocialMedia = () => {

    const title = "Suivez nous sur nos réseaux sociaux 🤳🏻";
    const instagramURL = "https://www.instagram.com/leaurah/?hl=fr";

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.social_media}>
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '50px', color: 'brown' }} />
                <a href={instagramURL}>
                    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '50px', color: 'brown' }} />
                </a>

                <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '50px', color: 'brown' }} />
            </div>
        </div>
    );
}

export default SocialMedia;