#! /usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";

const welCome = async () => {
    console.log(chalk.yellowBright(figlet.textSync("ATM \n")));
  };
  await welCome();
let balance = 125000; // initial balance

function checkBalance(): number {
  return balance
}

function deposit(amount: number): void {
  balance += amount;
}

function withdraw(amount: number): boolean {
  if (amount <= balance) {
    balance -= amount;
    return true;
  } else {
    console.log("Insufficient funds.");
    return false;
  }
}
function changePin(oldPin: string, newPin: string): boolean {
  // assume the oldPin is "858585"
  if (oldPin === "858585") {
    console.log(chalk.blueBright("PIN changed successfully."));
    return true;
  } else {
    console.log(chalk.blueBright("Incorrect PIN."));
    return false;
  }
}
// Example usage
console.log(chalk.greenBright(checkBalance()));
deposit(75000);
console.log(chalk.magentaBright(checkBalance())); 
withdraw(5000); 
withdraw(3000);
console.log(chalk.cyanBright(checkBalance())); 
changePin("858585", "5678"); 
