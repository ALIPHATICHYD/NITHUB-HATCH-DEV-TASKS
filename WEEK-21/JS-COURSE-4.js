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
 * You can check if an object has a property with the hasown property method.
 * Lets see how to use this method and finish making this function where we check if an object has a specific property.
 * If it doesn't have the specific property we'll return "Not Founds".
 * Lets see how thats gonna work👇🏽.
 */

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp){
    // Your Code Here 
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else {
        return "Not Found"; 
    }
};

console.log(checkObj("gift"));

/** Manipulating Complex Objects
 * A JavaScript Object is a way to store flexible data.
 * So you can store strings, numbers and arrays and even other object.
 * So in this example👇🏽 we have an array called 'myMusic'. We can see it's an array because we have the open bracket and closed bracket.
 * But inside the array are objects.
 */

var myMusic = [
    {
        "artist": 'Rema',
        "title": 'Holiday',
        "release_year": '2023',
        "formats": [
            "Spotify",
            "Apple Music",
            "Audio Mack",
        ],
        "gold": true
    },
    // Add record here 
    {
        "artist": 'Ashake',
        "title": 'Joha',
        "release_year": '2022',
        "formats": [
            "Spotify",
            "Apple Music",
            "Audio Mack",
        ],
    }

];


/** Accessing Nested Objects 
 * Here👇🏽 we have an object with other objects nested inside it.
 * So in order to access sub-properties of an object, you can chain together the dot or bracket or bracket notation.
 * So we will try to get the (gloveBoxContents).
 */

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk": "jack"
        }

    }

};

var gloveBoxContents = myStorage.car.inside["glove box"]; // You can change this line.

console.log(gloveBoxContents)


/** Accessing Nested Arrays
 * 
 */