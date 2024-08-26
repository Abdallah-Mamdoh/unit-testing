import {range} from "./Generator"

test('Range iterator between 2 & 10 every 2 ', () => {
    expect([...range(2,10,2)]).toEqual([2,4,6,8,10])
})


test('Range iterator (for loop) between 2 & 10 every 2 ', () => {
    const x : number[] = []
    for(const value of range(1,5,1)){x.push(value)}
    
    expect(x).toEqual([1,2,3,4,5])
    
})