describe('Bubble Sort', function(){

    it('sorts an empty array', function(){
        expect(bubbleSort([])).toEqual([]);
    });

    it('sorts an array of one element', function(){
        expect(bubbleSort([8])).toEqual([8]);
    });

    it('sorts an array of many elements', function(){
        expect(bubbleSort([5,2,7,8,4,1,3,6])).toEqual([1,2,3,4,5,6,7,8]);
    });
})