import { ProxyState } from "../AppState.js";
import ItemForSale from "../Models/ItemForSale.js";

class InventoryService {
    constructor() {
        console.log('hello from inventoryservice.js');
        ProxyState.inventory = {
            cookie: new ItemForSale("Chocolate Chip Cookies", 3.75, 5, false),
            butter: new ItemForSale("Butter", 3.25, 3, false),
            pickle: new ItemForSale("Pickle", 1, 1, false),
            krispie: new ItemForSale("Rice Krispie Treat", .5, 20, false)
        }
    }



    buy(itemKey) {

        let items = ProxyState.inventory
        ProxyState.currency = ProxyState.currency - items[itemKey]['price']
        items[itemKey]['quantity'] -= 1
        if (items[itemKey]['quantity'] == 0) {
            delete items[itemKey]
        }


        ProxyState.inventory = items
    }
}

export const inventoryService = new InventoryService()