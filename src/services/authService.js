import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://YOUR_IP_ADDRESS:3000'; // Заміна localhost на вашу IP-адресу

// Функція для входу
export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    
    // Зберігаємо токен у AsyncStorage
    await AsyncStorage.setItem('token', response.data.token);
    
    return response.data;
};

// Функція для реєстрації
export const register = async (email, password) => {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
};

// Функція для виходу
export const logout = async () => {
    await AsyncStorage.removeItem('token');
};

// Функція для отримання токена
export const getToken = async () => {
    return await AsyncStorage.getItem('token');
};
