export default class Currency {
    constructor(num) {
        this.num = num

        console.log('hello from Currency.js');
    }
    dis() {
        console.log(`${this.num} quarters`);
    }
}
