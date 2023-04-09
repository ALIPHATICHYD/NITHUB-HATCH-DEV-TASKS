/** Generate Random Whole Numbers 
 * Often you want a random whole number  instead of a decimal whole number
 * This can be accomplished with the Math.floor 
 * So when we pass in (Math.random * 20), and then we round down to the nearest whole number. 
 * This is going to create a whole number between 0 and 19.
 * Remember Math.random can never be 1. It can be 0 but can never be quite 1.
 * So when we multiply it by 20, we are going to get a number between 0 and 20, but not including 20.
 * And then we round down which will end up being 0 to 19.
 */

var randomNumberBetween0and19 = Math.floor(Math.random * 20)

function randomWholeNum(){

    return Math.random();
}

console.log(randomWholeNum());