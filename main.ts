import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
const currancy:any = {
    USD : 1,// basic currancy
    PKR: 277.54,
    INR: 83.30,
    EUR:0.92,
    GBP: 0.786,
    AUD:1.516,
    CAD:1.377,
    SGD:1.35,
    CHF:0.896,
    MYR:4.720,
    JPY:156.9,
    CNY:7.24,
 }
 let user = await inquirer.prompt(
    [
       {
        name:"from",
        message:"select your currancy which you wanted to convert",
        type:"list",
        choices: ['USD', 'PKR', 'INR', 'EUR', 'GBP', 'AUD', 'CAD', 'SGD', 'CHF', 'MYR', 'JPY', 'CNY'],
       },
       {
         name:"To",
         message:"select your currancy which you wanted to convert",
         type:"list",
         choices: ['USD', 'PKR', 'INR', 'EUR', 'GBP', 'AUD', 'CAD', 'SGD', 'CHF', 'MYR', 'JPY', 'CNY'],
       },
       {
         name :'Amount',
         message:"how much amount you want to convert",
         type:"number"
       }
    ]
);

let fromlist = currancy[user.from];
let tolist = currancy[user.to];


console.log(fromlist)
console.log(tolist)

class CurrencyConverter {
   private rates: { [key: string]: number };

   constructor(rates: { [key: string]: number }) {
       this.rates = rates;
   }

   convert(amount: number, from: string, to: string): number {
       if (!(from in this.rates) || !(to in this.rates)) {
           throw new Error('Currency not supported');
       }

       const fromRate = this.rates[from];
       const toRate = this.rates[to];

       return amount * (toRate / fromRate);
   }
}

