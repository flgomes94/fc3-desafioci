const quickSort = require('./quick-sort');

test("order a simple array", () => {
    expect(quickSort([10,50,1,900,7,89,54])).toEqual([1,7,10,50,54,89,900]);
})

test("order another more simple array", () => {
    expect(quickSort([1,2,3,4,5,6,7,8,9,10])).toEqual([1,2,3,4,5,6,7,8,9,10]);
})

test("order one reverse array", () => {
    expect(quickSort([10,9,8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9,10]);
})