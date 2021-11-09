import { ui } from "../module/module";
import { selectCryptocoins } from './../module/module';
import 'regenerator-runtime/runtime'
import { async } from "regenerator-runtime";


// show result of the consult
export const consultAPI =  async (objCrypto) => {
    const { moneda, crypto } = objCrypto;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`
    try {
        const response = await fetch(url);
        const data = await response.json();
        let price = data.DISPLAY[crypto][moneda]
        ui.showPrice(price)
    } catch (error) {
        console.log(error)
    }
}

// new Promise
const createCrypto = (cryptos) => new Promise(resolve => resolve(cryptos))

// create the array of API with the 10 best coins
export const cryptoAPI = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    try {
        const response = await fetch(url);
        const result = await response.json();
        const crypto = await createCrypto(result.Data);
        selectCryptocoins(crypto)
    } catch (error) {
        console.log(error)
    }
}
