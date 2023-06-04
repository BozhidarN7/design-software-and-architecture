import BurgerTypes from '../enums/BurgerTypes';
import Burger from './Burger';

class VegeterianBurger implements Burger {
  type = BurgerTypes.VEGETERIAN;
  price = 6.9;
}

export default VegeterianBurger;
