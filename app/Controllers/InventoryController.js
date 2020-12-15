import { ProxyState } from "../AppState.js";
import { inventoryService } from "../Services/InventoryService.js";


//Private
function _draw() {
    console.log('Draw called');
    let inventory = ProxyState.inventory;
    console.log(inventory);
    let template = '<div class="row justify-content-around my-5">'
    for (let itemKey in inventory) {
        let disabler = inventory[itemKey]['purchasable'] ? '' : 'disabled'

        template += `
        <div class="col-2 bg-warning">
            <h4>${inventory[itemKey]['name']}</h4>
            <h5>Remaining: ${inventory[itemKey]['quantity']}</h5>
            <h5>$${inventory[itemKey]['price']}</h5>
            <button ${disabler} class="btn d-flex align-self-end bg-primary" onclick="app.inventoryController.buy('${itemKey}')">Buy</button>
        </div>
    `
    }
    template +=
        `</div>`
    document.getElementById("app").innerHTML = template
}

//Public
export default class InventoryController {
    constructor() {
        console.log('hello from InventoryController.js');
        ProxyState.on("inventory", _draw);
        _draw()
    }
    buy(itemKey) {
        inventoryService.buy(itemKey)
    }

    addQuarter() {

    }

}
