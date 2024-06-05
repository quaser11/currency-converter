import axios from 'axios';
import optionTemplate from '../templates/option.hbs'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ключ и ендпоинт
const BASE_KEY = '205b01c16017b83fb2fbf760a4c3ccc0';
const endpoint = 'http://data.fixer.io/api';

// рендерим разметку или возвращаем ошибку
export default function renderingAvailableCurrencies(selector){
    const list = document.querySelector(`.${selector}`);

    fetchCurrencies().then(currencies => Object.keys(currencies.data.rates).forEach(currency => {
        list.insertAdjacentHTML('beforeend', optionTemplate(currency))
    })).catch(error => Notify.failure('Something went wrong. Please try again.'));
}

// Получаем последние данные о валютах
async function fetchCurrencies(){
    const response = await axios.get(`${endpoint}/latest?access_key=${BASE_KEY}`);

    return response
}