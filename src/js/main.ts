import '../css/main.scss'
import 'modern-normalize/modern-normalize.css';
import customSelect from "./custom-select";
import renderingAvailableCurrencies from "./currency-api";
import convertTo from "./convert-api";
const debounce = require('lodash.debounce');

const from = document.querySelector('.currency-converter__first-field__select');
const to = document.querySelector('.currency-converter__second-field__select');
const result = document.querySelector('.currency-converter__second-field__amount');

customSelect('currency-converter__first-field__select', 'currency-converter__first-field__options')
customSelect('currency-converter__second-field__select', 'currency-converter__second-field__options')
renderingAvailableCurrencies('currency-converter__first-field__options')
renderingAvailableCurrencies('currency-converter__second-field__options')


document.querySelector('.currency-converter__first-field__amount').addEventListener('input', debounce(getConvert, 300))

function getConvert(e:any) {
    type TypeRefs = {
        amount:number,
        from:string,
        to:string,
    }

    const refs:TypeRefs = {
        amount:0,
        from:'',
        to:'',
    }
    if(e.target.value === ''){
        return
    }

    refs.amount = e.target.value;
    refs.from = from.textContent.trim();
    refs.to = to.textContent.trim();

    console.log(convertTo(refs))
}