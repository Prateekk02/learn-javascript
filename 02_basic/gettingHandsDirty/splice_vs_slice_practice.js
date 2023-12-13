{
// Remove the third element from the array [1, 2, 3, 4, 5] using splice
const arr1 = [1, 2, 3, 4, 5];
// Your code here
arr1.splice(2,1)
console.log(arr1)
}

{
// Insert [6, 7] after the second element in the array [1, 2, 3, 4, 5] using splice
const arr2 = [1, 2, 3, 4, 5];

arr2.splice(2,0,6,7)
console.log(arr2)
}

{
    // Replace elements from index 1 to 3 in the array [10, 20, 30, 40, 50] with [15, 25, 35] using splice
const arr3 = [10, 20, 30, 40, 50];

arr3.splice(1,3,15,25,35)
console.log(arr3)

}

{
    // Remove the last two elements from the array [100, 200, 300, 400, 500] using splice
const arr4 = [100, 200, 300, 400, 500];
    arr4.splice(arr4.length-2, 2)
    console.log(arr4)

}