import { creator, selector } from "../module/module"

export class Interface {
    createOptions(arrCryptos, select) {
        arrCryptos.forEach( crypto => {
            const { FullName, Name } = crypto.CoinInfo;
            let option = creator('option');
            option.textContent = FullName;
            option.value = Name;
            select.appendChild(option)
        });
    }
    formInvalid(text, err, button, objCrypto) {
        button.disabled = true;
        if (objCrypto.crypto === '' && objCrypto.moneda === '') err.textContent = text
        setTimeout(() => {
            err.textContent = ''
        }, 3500)
    }
    showPrice(prices) {
        console.log(prices)
        const { PRICE, HIGHDAY, LOWDAY, LASTUPDATE, HIGHHOUR, CHANGEPCT24HOUR ,FROMSYMBOL, TOSYMBOL } = prices
        let price = selector('#price');
        let highday = selector('#higth-day');
        let highours = selector('#higth-hours');
        let lowday = selector('#low-day');
        let lastUpDate = selector('#last-update');
        let variants = selector('#variant');
        let title = selector('#content-modal');
        let spinner = selector('.modal-spinner');
        let modal = selector('.modal-content');

        spinner.classList.remove('visually-hidden');
        modal.classList.add('visually-hidden');

        setTimeout(() => {
            spinner.classList.add('visually-hidden');
            modal.classList.remove('visually-hidden');
            title.textContent = `Change from ${FROMSYMBOL} to ${TOSYMBOL}`
            price.textContent = `Price: ${PRICE}`;
            highday.textContent = `Maximum price of the day: ${HIGHDAY}`;
            highours.textContent = `Maximum price per hour: ${HIGHHOUR}`;
            lowday.textContent = `Minimum price of the day: ${LOWDAY}`;
            lastUpDate.textContent = `Last Update: ${LASTUPDATE}`;
            variants.textContent = `Variation of the last 24 hours: ${CHANGEPCT24HOUR}%`
        }, 2500)
    }
}