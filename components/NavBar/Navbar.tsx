import React from 'react';
import styles from '@/components/NavBar/NavBar.module.css'
import Link from 'next/link';

const NavBar = () => {
    const title = "L'idéal";
    const subtitle = "Art de la table • Épicerie fine • Dégustation"

    const tab = [
        { name: "Accueil", link: "/" },
        { name: "Qui sommes nous", link: "/qui_sommes_nous" },
        { name: "Nous contacter", link: "/nous_contacter" },

    ]


    return (
        <nav className={styles.navbar}>
            <div className={styles.title}>
                {title.toUpperCase()}
            </div>
            <div className={styles.subtitle}>
                {subtitle.toUpperCase()}
            </div>

            <div className={styles.divider}></div>

            <div className={styles.tabBar}>
                {tab.map((tab, index) => (
                    <div key={index}>
                        <Link href={tab.link} className={styles.link}>
                            {tab.name}
                        </Link>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;