import BurgerTypes from '../enums/BurgerTypes';
import Burger from './Burger';

class KingBurger implements Burger {
  type = BurgerTypes.KING;
  price = 13.9;
}

export default KingBurger;
