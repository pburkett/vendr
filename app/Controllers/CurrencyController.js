import { ProxyState } from "../AppState.js";
import { currencyService } from "../Services/CurrencyService.js";


//Private
function _draw() {
    console.log('Currency draw called - empty func');
    document.getElementById("quarter-display").innerHTML = `Money available: $${ProxyState.currency}`

}

//Public
export default class CurrencyController {
    constructor() {
        ProxyState.on("currency", _draw);
        _draw()
    }
    addQuarter() {
        currencyService.addQuarter()
    }

}
