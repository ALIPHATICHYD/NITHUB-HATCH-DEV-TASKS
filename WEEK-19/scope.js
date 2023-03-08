/** SCOPES
 * Generally there are 2 types of scopes;
 * 1. Global Scope - Visibility of this is very wide
 * 2. Local Scope - Visibility of this id limited
 * 
 * return is used to spit out a value in a function
 * 
 * *Objectives
 * var, let & const
 * variables
 * functions & closures
 */


let name = "Oguntola Favour ";

function decorateName2(name){
    console.log('Happy Womens Day ${name}, via console.')
}


// INPUT UNIT O  P  S
function decorateName(name){

    return 'Happy Womens Day ${name}'; // String intercollation
}

decorateName(name);

function spiceName(){
    return 'Happy Womens Day ${name}, via spice';
}

const result = decorateName();
const spicedName = spiceName();

console.log(spicedName);