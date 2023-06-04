import prompt from 'prompt-sync';
import restaurant from './Restaurant';
import { bill, returnChange, takeOrder } from './Cashier';
import { prepareBurger } from './Cook';
import BurgerWithSauce from './BurgerWithSauce';
import SauceTypes from './enums/SauceTypes';

const convertInputToNumber = (input: string) => {
  const num = Number(input);

  if (isNaN(num)) {
    return 0;
  }

  return num;
};

const readLine = prompt({ sigint: true });
const isInfinityLoop = true;

while (isInfinityLoop) {
  console.log('Hello, welcome to the Burger Restaurant');
  restaurant.welcomeClient();

  // give the user an options of burgers
  let orderType = 0;
  while (isInfinityLoop) {
    const input = readLine('Please choose from the list: ');
    orderType = convertInputToNumber(input);
    if (orderType && orderType <= restaurant.kitchen.menu.length) {
      break;
    } else {
      console.log('Wrong input. Try again!');
    }
  }

  // take the order and prepare the burger
  restaurant.cashier.execute(takeOrder(orderType - 1));
  const burger = await restaurant.cook.execute(prepareBurger(orderType - 1));

  // suggest sauce
  console.log('Do you want any sauce?');
  restaurant.kitchen.showSauces();
  console.log(
    'Type the name of the sauce you want or press enter if you do not want any sauce'
  );
  const sauce = readLine('What is your choice: ');
  let newBurger = burger;
  if (sauce) {
    newBurger = new BurgerWithSauce(burger, sauce as SauceTypes);
  }

  // make the user pay
  restaurant.cashier.execute(bill(newBurger));
  let amount: string | number = 0;
  while (isInfinityLoop) {
    amount = readLine('Please enter the amount you will pay the cashier: ');
    amount = convertInputToNumber(amount);
    if (amount && amount >= burger.price) {
      break;
    } else {
      console.log('Sorry but your money are fake. Please try again!');
    }
  }
  restaurant.cashier.execute(returnChange(burger.price, amount as number));

  console.log();
  console.log('---------------------------------------------------');
  console.log();
  console.log('Pres ctrl + c to exit');
  console.log();
}
