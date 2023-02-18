

        // i = 0;
        // b = i++;
        // console.log(b);
        // console.log(i);


        // a = 3;
        // c = ++a;
        // console.log(c);



for (let i = 0; i < 12; i++) {
    let isDivisible = i % 2 === 0;

    if (isDivisible) {
        alert(`${i} isDivisible by 2`)
    } else {   
        alert(`${i} is an odd number`)
    }
} 


// Arrays
// let array = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(array.length);
// console.log(array.push(9));
// console.log(array);

let array = [1, 2, 3, 4, 7, 8, 10];
for(let i = 0; i < 10; i++) {
    console.log(array[i]);
}

// CLASS TASK
/**
 * Initialize an array with elements 1 - 10
 * loop over the elements and check for these conditions.
 * 1. If the element is even (push it to another array);
 * 2. If the element us odd (push it to another array);
 */
