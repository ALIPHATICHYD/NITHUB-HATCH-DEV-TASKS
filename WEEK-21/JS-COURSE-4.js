/** Using Object for Lookups
 * Objects can be thought of as a key value storage like a dictionary.
 * You can use object to look up values.
 * So in this case we have switch statements that returns certain values.
 * So when you pass in 'alpha' to the function it returns "Adams", if you pass in 'bravo' it returns 'Boston'.
 * 
 */

function phoneticLookup(val) {
    var result = "";


// Only change code below this line
    switch(val){
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
            break;
        
    }
// We can replace the switch statement above👆🏾 with an object and ue the object for lookups instead of the switch statement.
// This is called a 'lookup table' or 'associative array'.
// The object is called 'lookup' and it has key value pairs.
// The key is the value that we are looking for and the value is the value that we want to return.
// So when we pass in 'alpha' to the function it returns 'Adams'.
// So we can replace the switch statement with the object below👇🏽:
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];


}
// Change the value to test 
console.log(phoneticLookup("foxtrot"));

/** Testing Objects for Properties
 */