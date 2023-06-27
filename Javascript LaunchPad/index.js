import { generateTextAndImage} from "./utils.js";

// 1. Change the value of the variable to your name.
let name = "FUAD ALIPHATIC";

// 2. Change the value of the variable to your favorite activity.
let favoriteActivity = "Coding";

// 3. Assign the favoritePlace variable to your favorite place.
// i.e hostel, mountain, hub, restaurant, beach, etc.

let favoritePlace = "Hub";

// 4. Configure the AI by setting a temperature from 0 to 1.
// The higher temperature, the more random & experimental output.

let temperature = 0.6;


generateTextAndImage(name, favoriteActivity, favoritePlace, temperature)