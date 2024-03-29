import React, { useState } from 'react';
import styles from '@/components/ContactUs/ContactUs.module.css';

const ContactUS = () => {
    const title = "Nous contacter";

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        object: '',
        message: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {title.toUpperCase()}
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <div className={styles.label}>
                        Nom*
                    </div>
                    <div className={styles.form_input}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Saissiez votre nom'
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.label}>
                        E-mail*
                    </div>
                    <div className={styles.form_input}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Saissiez votre e-mail'
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.label}>
                        Object
                    </div>
                    <div className={styles.form_input}>
                        <input
                            type="text"
                            id="object"
                            name="object"
                            value={formData.object}
                            onChange={handleChange}
                            placeholder="Saissiez l'object"
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.label}>
                        Message
                    </div>
                    <div className={styles.form_input}>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Rédigez votre message ici'
                            required
                        />
                    </div>
                </div>
                <button type="submit">Envoyer</button>
            </form>

        </div>
    );
}
export default ContactUS;