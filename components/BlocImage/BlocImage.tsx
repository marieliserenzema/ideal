import React from 'react';
import styles from '@/components/BlocImage/BlocImage.module.css'
import Image from 'next/image';

const BlocImage = () => {

    return (
        <div className={styles.container}>
            <Image
                src="/assets/table_deco.jpeg"
                alt="Description de l'image"
                width={500}
                height={500}
                className={styles.img_right}
            />

            <Image
                src="/assets/planche_charcuterie.jpg"
                alt="Description de l'image"
                width={500}
                height={500}
                className={styles.img_left}
            />


        </div>
    );
}
export default BlocImage;