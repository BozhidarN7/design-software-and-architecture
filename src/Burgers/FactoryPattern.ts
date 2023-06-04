import BurgerTypes from '../enums/BurgerTypes';
import ClassicalBurger from './ClassicalBurger';
import KingBurger from './KingBurger';
import VegeterianBurger from './VegeterianBurger';

class FactoryPattern {
  createBurger(burgerType: BurgerTypes) {
    let burger;
    if (burgerType === BurgerTypes.CLASSICAL) {
      burger = new ClassicalBurger();
    } else if (burgerType === BurgerTypes.KING) {
      burger = new KingBurger();
    } else if (burgerType === BurgerTypes.VEGETERIAN) {
      burger = new VegeterianBurger();
    }

    return burger;
  }
}

export default FactoryPattern;
