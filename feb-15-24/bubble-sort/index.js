// Bubble Sort in JavaScript
// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

// example 1:
function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            swapped = true;
        }
        }
    } while (swapped);
    return array;
}

// Example in use
const inputArray1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array is: ", bubbleSort(inputArray1)); // [11, 12, 22, 25, 34, 64, 90]

// example 2:
function bubbleSort(array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
        if (array[j] > array[j + 1]) {
            let tmp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = tmp;
        }
        }
    }
    return array;
}

// Example in use
const inputArray2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array is: ", bubbleSort(inputArray2)); // [11, 12, 22, 25, 34, 64, 90]

// example 3: 
function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n-1; i++) {
        // Track if any swap happens
        let swapped = false;
        for (let j = 0; j <n-i-1; j++) {
            // compare the current element with the next one
            if (array[j] > array[j + 1]) {
                // swap the elements
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
        // If no two elements were swapped, then break
        if (!swapped) break;
    }
    return array;
}

// Example in use
const inputArray = [64, 34, 25, 5, 3,12, 22,  8, 2, 1, 11, 90, 4];
console.log("Sorted array is: ", bubbleSort(inputArray)); // [1, 2, 3, 4, 5, 8, 11, 12, 22, 25, 34, 64, 90]