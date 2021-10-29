import { Interface } from './../class/UI';
// selectors of class and id
export const selector = (element) => document.querySelector(element);

// create element
export const creator = (element) => document.createElement(element);

//constants
export const selecCrypto = selector('#crypto');
export const quoteButton = selector('.button');
export const coins = selector('#moneda');
export const errMSG = selector('#form-invalid');
export const form = selector('#form');
export const ui = new Interface()


// create options 
export const selectCryptocoins = (cryptos) => ui.createOptions(cryptos, selecCrypto)

