// Example of the Decorator Pattern

import Burger from './Burgers/Burger';
import SauceTypes from './enums/SauceTypes';

class BurgerWithSauce {
  burger: Burger;
  sauce: SauceTypes;

  constructor(burger: Burger, sauce: SauceTypes) {
    this.burger = burger;
    this.sauce = sauce;
  }
}

export default BurgerWithSauce;
