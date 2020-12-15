
import ValuesController from "./Controllers/ValuesController.js";
import InventoryController from "./Controllers/InventoryController.js"
import CurrencyController from "./Controllers/CurrencyController.js"

class App {
  valuesController = new ValuesController();
  inventoryController = new InventoryController();
  currencyController = new CurrencyController();
}



window["app"] = new App();
