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
 * Array bracket notation can be changed to access nested arrays.
 * You will see that we have an array here👇🏽 and inside the array are 2 objects.
 * 
 */

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "hibiscus"
        ]
    },

    {
        type: "trees",
        list: [
            "iroko",
            "pine",
            "palm"
        ]

    }

];

// Only change code below this line
var secondTree = myPlants[1].list[1]; // Change this line


/** Record Collection
 * This is a coding challenge we are going to do.
 * We are given this object here which is the Record Collection.
 * Each record has an ID and then also has different pieces of information about the record.
 * They don't all have the same information, but you will see that we have "album", "artist", "track".
 * And we are supposed to create this updateRecord function where we can pass in the ID, the property and the value.
 * And its going to update our record collection with the property and the value.
 * So, for instance, if we pass in the ID "2468" and we put the property "artist".
 * And if we set a different value like "Quincy" or something like that, then we should update this👇🏽 whole object.
 * So, now it says "Quincy" instead of "Prince".
 * And we should return the full collection.
 * So, its gonna update the collection then return the collection.
 * If we have an empty string for the value, it should just completely delete that property.
 * Also if we have the property of tracks and then we have a value, instead of updating the whole tracks here👇🏽 with what we put in.
 * Its just going to add the track to the end of this array.
 * So if you really look down there, the comment says "Keep a copy of the collection for test".
 * The (JSON.parse) and (JSON.stringify) and then 'collection', this is just a fancy way in javascript to make a copy of the object.
 * Remember in our function we are going to be changing the collection object.
 * But we wanna have a copy of the original object before anything was changed, so thats whats thats for. 
 * So, lets go ahead and do that🔥🚀
 */

// Setup
var collection = {
    "2548": {
        "album": "",
        "artist": "",
        "tracks": [
            "",
            "",
        ]

    },

    "2468": {
        "album": "",
        "artist": "",
        "tracks": [
            "",
            "",
        ]
    },

    "1245": {
        "artist": "",
        "tracks": []
    },

    "5439": {
        "album": "Odogwu"
    }

};

// Keep a copy of the collection for tests 
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line 
function updateRecords(id, prop, value){
    if (value === ""){
        delete collection[id][prop];
    } else if (props === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }


    return collection;
}


// Alter values to test your codes 
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "Odogwu"));






/** Iterate With While Loops
 * Loops allows you to run the same code multiple times,
 * We are going to use a while loop to do this.
 * This while loop will run a  specified condition is true and stops when it no longer true.
 * Heres how its going to work.
 */

var myArray = []; 