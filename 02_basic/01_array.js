// Declaration of arrays

const arr = [0,1,2,3,4]

const newArr = new Array (6,7,8,9,0)

console.log(arr)

// Array methods

arr.push(9)
console.log("push 9 : " , arr)

arr.pop()
console.log("pop:" ,arr)

arr.unshift(5)
console.log("unshift 5 : ", arr)

arr.shift()
console.log("shift: ", arr)

// Some useful methods are:
/*
    ->  join() => returns value in string.
    -> slice() => returns a section of array.  (not inplace --> does not manipulates original array)
    -> splice() => removes or add section to the array (inplace -> manipulates original array)
    -> concat() => concats two array and return it in new array.
 */

// Concat function.

const arr1 = new Array (1,2,3,4,5)
const arr2 = new Array (5,6,7,8,9)

const arr3 = arr1.concat(arr2)
console.log("arr3 is : ", arr3)

// Spread method

const arr_spread_method = [...arr1, ...arr2]

console.log("spread method depiction : ", arr_spread_method)

// flat method 

const arrOfarr = [1,2,[3,4,5],[2,3,[3,4,[5,4,3,[34,4,5],4,5,6],1],2],3]   // To many array inside one array

const useableArr = arrOfarr.flat(5)

console.log("flat method depiction: ", useableArr)

// from method

console.log(Array.isArray("CodeWalker66"))
console.log(Array.from("CodeWalker66"))
console.log(Array.from({name:"codeWalker66"}))