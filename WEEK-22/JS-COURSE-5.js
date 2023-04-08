/** Generate Random Whole Numbers 
 * Often you want a random whole number  instead of a decimal whole number
 * This can be accomplished with the Math.floor 
 * So when we pass in (Math.random * 20), and then we round down to the nearest whole number. 
 * This is going to create a whole number between 0 and 19.
 * Remember Math.random can never be 1. It can be 0 but can never be quite 1
 */

var randomNumberBetween0and19 = Math.floor(Math.random * 20)

function randomWholeNum(){

    return Math.random();
}

console.log(randomWholeNum());