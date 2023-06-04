import FactoryPattern from './Burgers/FactoryPattern';
import Burger from './Burgers/Burger';
import Command from './CommandPattern';
import BurgerTyeps from './enums/BurgerTypes';

class Cook {
  firstName: string;
  lastName: string;
  fullName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
  }

  execute(command: any, ...args: any[]) {
    return command.execute();
  }
}

export function prepareBurger(burgerType: number) {
  return new Command<any, Promise<Burger | undefined>>(async () => {
    console.log('Preparing 🍔🍔🍔');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const factory = new FactoryPattern();
    const burger = factory.createBurger(Object.values(BurgerTyeps)[burgerType]);
    return burger;
  });
}

export default Cook;
