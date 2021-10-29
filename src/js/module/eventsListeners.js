import { selecCrypto, coins, form, ui, quoteButton, errMSG } from './module';
import { consultAPI } from './../api/API';

const objCrypto = {
    moneda: '',
    crypto: '',
}

const readValue = (e) => {
    objCrypto[e.target.name] = e.target.value

    if (objCrypto.crypto !== '' && objCrypto.moneda !== '') {
        quoteButton.disabled = false
        return
    }
    if (objCrypto.crypto === '' || objCrypto.moneda === '') ui.formInvalid('Ambos campos son obligatorios', errMSG, quoteButton,objCrypto);
}

export const listeners = () => {
    selecCrypto.addEventListener('change', readValue);
    coins.addEventListener('change', readValue);
    form.addEventListener('submit', e => {
        e.preventDefault();
        consultAPI(objCrypto);
    });
}