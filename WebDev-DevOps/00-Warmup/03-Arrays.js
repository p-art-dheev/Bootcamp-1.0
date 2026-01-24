let arr = [10, 20, 30, 40, 50, 60]
console.log(arr)
console.log(arr[1]) //20 sine it is zero based indexing


console.log("----------------push()----------------")
//push()
// What: Adds element(s) to end
// Syntax: arr.push(item1, item2, ...)
arr.push(99) // pushes 99 into the array
console.log(arr)

arr.push(11,22,33,44)
console.log(arr)




console.log("----------------pop()----------------")
// What: Removes last element
// Returns: Removed element
// Syntax: arr.pop()
let arrpop = [3, 9, 27, 81]
arrpop.pop() // pops last element i.e 81
console.log(arrpop) // [ 3, 9, 27 ]


console.log("----------------shift()----------------")
// shift()
// What: Removes first element
// Returns: Removed element
// Syntax: arr.shift()
let arrshift = [0,1,2,3,4,5,6,7,8,9]
arrshift.shift() // removes first element 
console.log(arrshift) // [1,2,3,4,5,6,7,8,9]





console.log("----------------unshift()----------------")
// unshift()
// What: Adds element(s) to start
// Returns: New length
// Syntax: arr.unshift(item1, item2, ...)
let arrayunshift = [1,2,3,4,5,6,7,8,9]
arrayunshift.unshift(100, 200) //adds 100, 200 to the start of the array
console.log(arrayunshift)



console.log("----------------concat()----------------")
// concat()
// What: Combines arrays (does not modify original)
// Returns: New array
// Syntax: arr1.concat(arr2, arr3, ...)

let arr1 = [10,20,30]
let arr2 = [1,2,3]
let c = arr1.concat(arr2)
console.log(c) //[ 10, 20, 30, 1, 2, 3 ]
let d = arr1.concat(arr1)
console.log(d) //[ 10, 20, 30, 10, 20, 30 ]

// forEach
// map, filter, find, sort, callbacks level 1 arrays left