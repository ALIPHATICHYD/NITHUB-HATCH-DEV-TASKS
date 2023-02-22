let userName = prompt("What is your name? ");

let trenchesType = prompt("Where do you stay on campus? (Mariere, Eni-njoku, Jaja, Biobaku ) ");

function clg(trenchesType) {
    
    console.log(trenchesType);

    if (trenchesType === "Mariere") {
    

    console.log("Hey anonymous, so sorry about your predicament")

    for (let i = 0 ; i < 20; i++ ) {

        clg("Mariere");

    }

} else if (trenchesType === "Biobaku") {

 console.log("Hey anonymous, so sorry about your predicament")

    // Print biobaku 20 times

    for (let i = 0; i < 20; i++) {
            
            clg("Biobaku");
    
    }
    
} else if (trenchesType === "Eni-njoku") {
    
        console.log("Hey anonymous, so sorry about your predicament")
    
        // Print eni-njoku 20 times
    
        for (let i = 0; i < 20; i++) {
                
                clg("Eni-njoku");
        
        }
        
} else if (trenchesType === "Jaja") {
        
            console.log("Hey anonymous, so sorry about your predicament")
        
            // Print jaja 20 times
        
            for (let i = 0; i < 20; i++) {
                    
                    clg("Jaja");
            
            }
            
} else {    
    console.log("Invalid input, please try again")


    }
}

