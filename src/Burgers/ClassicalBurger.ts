import BurgerTypes from '../enums/BurgerTypes';
import Burger from './Burger';

class ClassicalBurger implements Burger {
  type = BurgerTypes.CLASSICAL;
  price = 7.9;
}

export default ClassicalBurger;
