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


/** Generate Random Whole Numbers Within A Range
 * You can also generate random whole numbers within a range. 
 * So look at this function here👇🏽 ourRandomRange.
 * It takes a minimum number and a maximum number and then just runs through calculation here👇🏽.
 * So, we have Math.random and we multiply it by the maximum number or minimum number +1.
 * And we get the floor which is rounding down.
 * And we add all that to our minimum number. 
 */

function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change this code below this line.

function randomRange(myMin, myMax){

    return 0;
}

var myRandom = randomRange(5, 15);

console.log(myRandom);