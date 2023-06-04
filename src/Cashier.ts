import BurgerTyeps from './enums/BurgerTypes';
import Command from './CommandPattern';
import BurgerWithSauce from './BurgerWithSauce';
import Burger from './Burgers/Burger';

class Cashier {
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

export function greet(fullName: string) {
  return new Command(() => {
    console.log(`Hi, my name is ${fullName}. What do you want to order?`);
  });
}

export function takeOrder(burgerType: number) {
  return new Command(() => {
    const chosenBurger = Object.values(BurgerTyeps)[burgerType];
    console.log(
      `Great choice. Your ${chosenBurger} burger will be ready soon!`
    );
  });
}

export function bill(burger: Burger | BurgerWithSauce) {
  return new Command(() => {
    if (burger instanceof BurgerWithSauce) {
      console.log(
        `Hey, your ${(burger as BurgerWithSauce).burger.type} burger with ${
          (burger as BurgerWithSauce).sauce
        }
        is ready. It will cost you $${(
          burger as BurgerWithSauce
        ).burger.price.toFixed(2)}.`
      );
    } else {
      console.log(
        `Hey, your ${
          (burger as Burger).type
        } burger is ready. It will cost you $${(burger as Burger).price.toFixed(
          2
        )}.`
      );
    }
  });
}

export function returnChange(totalPrice: number, amount: number) {
  return new Command(() => {
    console.log(
      `Here is your burger with and your change is $${(
        amount - totalPrice
      ).toFixed(2)}. Have a nice day`
    );
  });
}

export default Cashier;
