/** Scope determines the lifespan/visibility of an object. 
 * In JavaScript Scopes are divided into 2 Global and Local 
 * Objects live within their scope, In any object, variable declared within a scope its only seen within that scope.
 */


// Michele obama 

{
    // Funke Akindele.[Nigeria]
    {
        // Osun.[Iya Osun]....
        const amount = 1000;
        {
            // Iyabo
            const a = 90;
            console.log(a);

            console.log(`the amount is ${amount}`);
        }
    }

    console.log(`AMount is ${amount}`)
}

function sendNotification() {
    const userEmail = "whatsoever";
}
