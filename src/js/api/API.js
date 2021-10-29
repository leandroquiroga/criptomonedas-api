import { ui } from "../module/module";
import { selectCryptocoins } from './../module/module';



// show result of the consult
export const consultAPI = (objCrypto) => {
    const { moneda, crypto } = objCrypto;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`
    fetch(url)
        .then(response => response.json())
        .then(result => {
            let price = result.DISPLAY[crypto][moneda];
            ui.showPrice(price)
        })
}

// new Promise
const createCrypto = (cryptos) => new Promise(resolve => resolve(cryptos))
    
// create the array of API with the 10 best coins
export const cryptoAPI = () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    fetch(url)
        .then(response => response.json())
        .then(result => createCrypto(result.Data))
        .then(cryptos => selectCryptocoins(cryptos))
}
