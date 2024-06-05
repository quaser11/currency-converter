import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ключ и ендпоинт
const BASE_KEY = '205b01c16017b83fb2fbf760a4c3ccc0';
const endpoint = 'http://data.fixer.io/api';

export default async function convertTo(obj){
    try {
        const response = await axios.get(`${endpoint}/convert?${BASE_KEY}` , obj)
        return await response.result;
    } catch(error) {
        Notify.failure('Something went wrong. Please try again.');
    }
}