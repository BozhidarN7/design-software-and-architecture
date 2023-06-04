import BurgerTyeps from './enums/BurgerTypes';
import SauceTypes from './enums/SauceTypes';

class Kitchen {
  menu: BurgerTyeps[];
  sauces: SauceTypes[];

  constructor() {
    this.menu = Object.values(BurgerTyeps);
    this.sauces = Object.values(SauceTypes);
  }

  showMenu() {
    this.menu.forEach((burgerType, index) =>
      console.log(`Type ${index + 1} to order ${burgerType} burger`)
    );
  }
  showSauces() {
    this.sauces.forEach((sauce) => console.log(`🧂🧂🧂 ${sauce} 🧂🧂🧂`));
  }
}

export default Kitchen;
