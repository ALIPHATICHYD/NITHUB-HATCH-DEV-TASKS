/** SCOPES
 * Generally there are 2 types of scopes;
 * 1. Global Scope - Visibility of this is very wide
 * 2. Local Scope - Visibility of this id limited
 * 
 * return is used to spit out a value in a function
 * 
 * *Objectives
 * var, let & const
 * variables
 * functions & closures
 */


let name = "Oguntola Favour ";

function decorateName2(name){
    console.log('Happy Womens Day ${name}, via console.')
}


// INPUT UNIT O  P  S
function decorateName(name){

    return 'Happy Womens Day ${name}'; // String intercollation
}

decorateName(name);

function spiceName(){
    return 'Happy Womens Day ${name}, via spice';
}

const result = decorateName();
const spicedName = spiceName();

console.log(spicedName);

/** In JavaScript anything you write within a curly braces, you've declared a scope
* In every scope you can create a scope
*/

let firstNum = 10; // This is in the Global Scope 
{
    let secondNum = 20; // secondNum & thirdNum are both in a Local Scope
    let thirdNum = 40;
    console.log(secondNum);

    // Local Scope [Nested Scope]
    {
        let fifthNum = 50;
        let sixthNum = 60;
    }

    console.log(fifthNum); // fifth num is not defined when we log it out because fifthNum & sixthNum are not within the context of the big scope.
    console.log(sixthNum);
}

let fourthNum = 90;

console.log(firstNum, ' ==> firstNum' );
console.log(secondNum, ' ==> secondNum');

//  @destinationWallet
const peaceWallet = {
    currency: "NGN",
    balance: 1_000_000
}

// @sourceWallet
const olaideWallet = {
    currency: "USD",
    balance: 2_000_000
}

const exchangeRate = 720;

const walletsHaveTheSameCurrency = olaideWallet.currency === peaceWallet.currency;

if(walletsHaveTheSameCurrency){
    let creditedAmount = olaideWallet.balance ; //- 10
    // peaceWallet.balance += creditedAmount;
    // console.log(creditedAmount, "credited amount")
    // Perform normal transactions
    console.log(creditedAmount, "credited amount in if")
    // get the exchange rate value and do the permutation.
} else {
    console.log(creditedAmount, "credited amount in else")
}



const peaceSubscribers = 10_000;
const target = 100_000;

function sendNotification(count){
    return 'Peace!!! now has ${count} subscribers'
}

while(peaceSubscribers < 10_001){
    const report = sendNotification(peaceSubscribers);

    let something = 10;

console.log(report); // Inside this scope the log of the answer is defined, it will not give error
peaceSubscribers++;
}

// console.log(report);  Outside the scope the log of the answer will give error at the end of the program, it is not defined



var ochayan = "Queen";
// let crocs;
// const cash;

var ochayan = "Our favorite weird person";

var ochayanzMoney = 20_000_000;
var ochayanzMoney = 10_000_000;

console.log(ochayan);





/** Based on variable Declaration and Initialization
 * * Var - loose, allows you to "declare" and "initialize" an already declared and initialized value.
 * * Let - strict, does not "declare" but it allows you to "re-initialize".
 * * Const - very strict, does not initialize.
 */

