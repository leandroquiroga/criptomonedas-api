import { cryptoAPI } from "../api/API";
import { quoteButton} from "../module/module";
import { listeners } from './../module/eventsListeners';

export const initAPP = () => {
    document.addEventListener('DOMContentLoaded', () => {
        quoteButton.disabled = true;
        cryptoAPI()
    })
    listeners();
}