/** Logical Order In If Else Statements
 * When you are using Else if statements Order is very important 
 * Lets look at this example here ;
 */

function orderMyLogic(val){
    if (val < 5){
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 5";
    }
}

// Change the value to test
console.log(orderMyLogic(7));


/** Chaining If Else Statements
 * 
 */