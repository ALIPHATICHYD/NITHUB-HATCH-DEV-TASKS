// Array Challenge
//  Have the function ArrayChallenge (arr) take the
//  array of numbers stored in arr and return the number
// that appears most frequently (the mode). For example:
//  if arr contains [10, 4, 5, 2, 4] the output should be 4. If
//  there is more than one mode return the one that
//  appeared in the array first (ie. [5, 10, 10, 6, 5] should
//  return 5 because it appeared first). If there is no mode
//  return -1. The array will not be empty.


// Solution

function ArrayChallenge(arr) {
    let obj = {};
    let max = 0;
    let maxKey = 0;
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            maxKey = key;
        }
    }
    if (max === 1) {
        return -1;
    }
    return maxKey;
}

// keep this function call here
console.log(ArrayChallenge(readline()));




// Array Challenge
//  Have the function ArrayChallenge (strArr) take
// the array of strings stored in strArr, which will only
//  contain two strings of equal length and return the
//  number of characters at each position that are
//  different between them. For example: if strArr is
//  ["house", "hours"] then your program should return 2.
//  The string will always be of equal length and will only
//  contain lowercase characters from the alphabet and
//  numbers


// Solution

function ArrayChallenge(strArr) {   
    let count = 0;
    for (let i = 0; i < strArr[0].length; i++) {
        if (strArr[0][i] !== strArr[1][i]) {
            count++;
        }
    }
    return count;
}

// keep this function call here

console.log(ArrayChallenge(readline()));



// Searching Challenge
//  Have the function SearchingChallenge (str) take
// the str parameter being passed and return 1
//  #ofBrackets if the brackets are correctly matched and
//  each one is accounted for. Otherwise return 0. For
//  example: if str is "(hello [world])(!)", then the output
//  should be 1 3 because all the brackets are matched
//  and there are 3 pairs of brackets, but if str is "((hello
//  [world])" the the output should be 0 because the
//  brackets do not correctly match up. Only "(", ")", "[", and
//  "]" will be used as brackets. If str contains no brackets
//  return 1.


// Solution

function SearchingChallenge(str) {
    let count = 0;
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(" || arr[i] === "[" || arr[i] === ")" || arr[i] === "]") {
            count++;
        }
    }
    if (count === 0) {
        return 1;
    }ac
    if (count % 2 !== 0) {
        return 0;
    }
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === "(") {
            count1++;
        } else if (arr[i] === ")") {
        count2++;
    } else if (arr[i] === "[") {
        count3++;
    } else if (arr[i] === "]") {
        count4++;
    }
    if (count1 === count2 && count3 === count4) {
        return 1 + " " + count1;
    }
    return 0;
}

// keep this function call here

console.log(SearchingChallenge(readline()));




// String Challenge
//  Have the function StringChallenge (str) take the
// str parameter being passed and determine if it is a
// valid serial number with the following constraints:
//  1. It needs to contain three sets each with three digits
//  (1 through 9) separated by a period.
// 2. The first set of digits must add up to an even
//  number.
//  3. The second set of digits must add up to an odd
//  number.
// 4. The last digit in each set must be larger than the two
// previous digits in the same set.
//  If all the above constraints are met within the string,
// the


// Solution

function StringChallenge(str) {
    let arr = str.split(".");
    if (arr.length !== 3) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length !== 3) {
            return false;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum += parseInt(arr[i][j]);
        }
        if (i === 0 && sum % 2 !== 0) {
            return false;
        }
        if (i === 1 && sum % 2 === 0) {
            return false;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][2] <= arr[i][1] || arr[i][2] <= arr[i][0]) {
            return false;
        }
    }
    return true;
}

// keep this function call here

console.log(StringChallenge(readline())); 












// Array Challenge

// Have the function ArrayChallenge (strArr) take
// the array of strings stored in strArr, which will only
// contain two strings of equal length and return the
// number of characters at each position that are
// different between them. For example: if strArr is
// ["house", "hours"] then your program should return 2.
// The string will always be of equal length and will only
// contain lowercase characters from the alphabet and
// numbers

// ely (-)

// Input: ["10011", "10100"]
// Output: 3

// Input: ["abcdef", "defabc"]
// Output: 6


function ArrayChallenge(strArr) {
    let count = 0;
    let str1 = strArr[0];
    let str2 = strArr[1];
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
    }
    return count;
}

// keep this function call here 
console.log(ArrayChallenge(readline()));






// Searching Challenge

// Have the function SearchingChallenge (str) take
// the str parameter being passed and return 1
// #ofBrackets if the brackets are correctly matched and
// each one is accounted for. Otherwise return 0. For
// example: if stx is "(hello [world])(!)", then the output
// should be 1 3 because all the brackets are matched
// and there are 3 pairs of brackets, but if stx is "((hello
// [world])" the the output should be 0 because the
// brackets do not correctly match up. Only "(", ")", "[", and
// "|" will be used as brackets. If str contains no brackets
// return 1.

// Examples

// Input: "Ccoder)[byte)]"
// Output: @

// Input: "CcC[odJer)) bCyt[e])"
// Output: 15


function SearchingChallenge(str) {
    let count = 0;
    let open = 0;
    let close = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "[") {
            open++;
        } else if (str[i] === ")" || str[i] === "]") {
            close++;
        }
    }
    if (open === close) {
        count = open;
    } else {
        count = 0;
    }
    return count;
}

// keep this function call here
console.log(SearchingChallenge(readline()));



// String Challenge

// Have the function St ringChallenge (str) take the
// str parameter being passed and determine if it is a
// valid serial number with the following constraints:

// 1. It needs to contain three sets each with three digits
// (1 through 9) separated by a period.

// 2. The first set of digits must add up to an even
// number.

// 3. The second set of digits must add up to an odd
// number.

// 4. The last digit in each set must be larger than the two
// previous digits in the same set.

// If all the above constraints are met within the string,
// the your program should return the string true,
// otherwise your program should return the string false.
// For example: if str is "224.315.218" then your program
// should return "true".

// ET (3

// UgyeYeng es abil, Ze Cxore
// Output: false

// Input: "114.568.112"
// Output: true


function StringChallenge(str) {
    let arr = str.split(".");
    let first = arr[0];
    let second = arr[1];
    let third = arr[2];
    let firstSum = 0;
    let secondSum = 0;
    let thirdSum = 0;
    let firstArr = first.split("");
    let secondArr = second.split("");
    let thirdArr = third.split("");
    for (let i = 0; i < firstArr.length; i++) {
        firstSum += parseInt(firstArr[i]);
    }
    for (let i = 0; i < secondArr.length; i++) {
        secondSum += parseInt(secondArr[i]);
    }
    for (let i = 0; i < thirdArr.length; i++) {
        thirdSum += parseInt(thirdArr[i]);
    }
    if (firstSum % 2 === 0 && secondSum % 2 !== 0 && thirdSum % 2 !== 0) {
        if (firstArr[2] < firstArr[1] && firstArr[1] < firstArr[0]) {
            if (secondArr[2] < secondArr[1] && secondArr[1] < secondArr[0]) {
                if (thirdArr[2] < thirdArr[1] && thirdArr[1] < thirdArr[0]) {
                    return true;
                }
            }
        }
    }
    return false;
}