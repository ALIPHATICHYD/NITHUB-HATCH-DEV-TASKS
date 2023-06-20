/** * Implement a dynamic array in your chosen language with the following operations
* Add(val)
* An element to the end of the array. 
* Copy and double if necessary.
* Get(i) - returns the element at index i, throw exception if out of bounds.
* Set(i, val) - sets the value at index i to val. throw exception if out of bounds.
* Size() - returns the size of the array
* Capacity() - returns the capacity of the array
*/ 

class DynamicArray {
    private arr: number[];
    private size: number;
    private capacity: number;
    constructor() {
        this.arr = [];
        this.size = 0;
        this.capacity = 0;
    }
    public add(val: number) {
        if (this.size === this.capacity) {
            this.capacity = this.capacity === 0 ? 1 : this.capacity * 2;
            this.arr = this.copyArray(this.arr, this.capacity);
        }
        this.arr[this.size++] = val;
    }

    public get(i: number) {
        if (i < 0 || i >= this.size) {
            throw new Error('Index out of bounds');
        }
        return this.arr[i];
    }
    public set(i: number, val: number) {
        if (i < 0 || i >= this.size) {
            throw new Error('Index out of bounds');
        }
        this.arr[i] = val;
    }

    public getSize() {
        return this.size;
    }
    public getCapacity() {
        return this.capacity;
    }
    private copyArray(arr: number[], capacity: number) {
        const newArr = [];
        for (let i = 0; i < capacity; i++) {
            newArr[i] = arr[i];
        }
        return newArr;
    }
}