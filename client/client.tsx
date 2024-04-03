import FormDataModel from '@/models/FormDataModel';
import axios from '../utils/axios';

export const sendFormData = async (formData: FormDataModel) => {
    try {
        const response = await axios.post('/api/send-email', formData);
        console.log('Réponse du serveur:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la requête:', error);
        throw error;
    }
};

