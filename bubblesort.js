'use strict';

function bubbleSort(array){
    // for(let i = 0; i < array.length; i++) { // passes
    //     for (let j = 0; j < array.length; j++) { // bubbling

    //         if (!inOrder(array, j)) swap(array, j);
    //     }
    // }

    let sorted = false;
    for (let end = array.length - 1; end >= 0 && !sorted; end--) { // passes
        sorted = true;
        for (let j = 0; j < end; j++) { // bubbling
            if (!inOrder(array, j)) {
                swap(array, j);
                sorted = false;
            }
        }
    }
    return array;
}

function inOrder(arr, index) { // pure function
    if (index === arr.length - 1) return true;
    return arr[index] < arr[index + 1];
}

function swap (arr, index) { // side effects
    let oldLeft = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = oldLeft;
}

console.log(bubbleSort([3, 5, 1]));
