/* 2619. Array Prototype Last
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

* Example 1:

Input: nums = [1,2,3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.


* Example 2:

Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.

Constraints:

* 0 <= arr.length <= 1000
* 0 <= arr[i] <= 1000
*/




// Solution 

declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

// Array.prototype.last = function() {
//     let last: number = -1;
//     for (let i = 0, i <= this.length-1; i++){
//         if (i === this.length){
//             last = this[i]
//         }
//     } 
//     return last;
// };

//OR

Array.prototype.last = function() {
    return this.length ? this[this.length -1] : -1
}

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};


