import {range} from "./Iterator"

test('Range iterator between 2 & 10 every 2 ', () => {
    expect(range(2,10,2).next()).toEqual({"done": false, "value": 2})
})

test('Range iterator (spread operator) between 2 & 10 every 2 ', () => {
    expect([...range(5,30,5)]).toEqual([5, 10, 15, 20, 25, 30])
})

test('Range iterator (spread operator contains) between 2 & 10 every 2 ', () => {
    expect([...range(5,30,5)]).toContain(30)
})

test('Range iterator (for loop) between 2 & 10 every 2 ', () => {
    const x : number[] = []
    for(const value of range(2,8,2)){x.push(value)}
    // console.log(x);
    
    expect(x).toEqual([2, 4, 6, 8])
    
})


