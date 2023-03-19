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


}