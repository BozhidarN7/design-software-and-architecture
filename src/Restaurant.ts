// Singleton pattern implementation

import Kitchen from './Kitchen';
import Cashier, { greet } from './Cashier';
import Cook from './Cook';

let instance: any;

class Restaurant {
  cashier: Cashier;
  kitchen: Kitchen;
  cook: Cook;
  constructor() {
    if (instance) {
      throw new Error('You can only create one instance!');
    }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    instance = this;
    this.cashier = new Cashier('Boz', 'Ski');
    this.kitchen = new Kitchen();
    this.cook = new Cook('Chef', 'Bot');
  }

  getIntance() {
    return this;
  }

  welcomeClient() {
    this.cashier.execute(greet(this.cashier.fullName));
    this.kitchen.showMenu();
  }
}

const restaurant = Object.freeze(new Restaurant());
export default restaurant;
