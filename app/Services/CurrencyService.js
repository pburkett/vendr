import { ProxyState } from "../AppState.js";
import Currency from "../Models/Currency.js";

class CurrencyService {
    constructor() {
        console.log('hello from currencyService.js');
    }

    addQuarter() {
        console.log('quarter added');

        ProxyState.currency = ProxyState.currency + .25
        for (let key in ProxyState.inventory) {
            console.log(`checked ${key} for afford`);
            (ProxyState.inventory[key].purchasable) = (ProxyState.inventory[key].price <= ProxyState.currency)
            ProxyState.inventory = ProxyState.inventory
        }
    }
}
export const currencyService = new CurrencyService();

