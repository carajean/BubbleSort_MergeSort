/* eslint-disable no-undef */
/* eslint-disable no-loop-func */

function generageArray(size, lower, upper) {
    let randomArray = [];
    while (size--) {
        let randomNum = Math.floor(lower + Math.random() * upper);
        randomArray.push(randomNum);
    } return randomArray;
}

describe('Bubble Sort', function(){

    it('sorts an empty array', function(){
        expect(bubbleSort([])).toEqual([]);
    });

    it('sorts an array of one element', function(){
        expect(bubbleSort([8])).toEqual([8]);
    });

    // it('sorts an array of many elements', function(){
    //     expect(bubbleSort([5,2,7,8,4,1,3,6])).toEqual([1,2,3,4,5,6,7,8]);
    // });

    for (let i = 2; i < 103; i += 20) {
        it('sorts an array of ' + i + 'random items', function(){
            let arr = generageArray(i, 0, 100);
            let sorted = arr.slice(0).sort((a, b) => a - b);
            expect(bubbleSort(arr)).toEqual(sorted);
        });
    }

    it('compares the expected number of times', function(){
        spyOn(window, 'inOrder').and.callThrough();
        bubbleSort([4, 6, 5, 1]);
        expect(inOrder.calls.count()).toEqual(10);
    });

    it('swaps the expected number of times', function(){
        spyOn(window, 'swap').and.callThrough();
        bubbleSort([4, 6, 5, 1]);
        expect(swap.calls.count()).toEqual(4);
    });

    // function spyOn (obj, method) {
    //     let counter = 0;
    //     let spy = function() {
    //         count++;
    //     }
    //     obj[method] = spy;
    //     spy.calls = {
    //         count: function() { return counter; }
    //     };
    // }
});
