let score = "33"

console.log(typeof(score))

let numberInValue = Number(score)

console.log(typeof(numberInValue))

let newScore = "33abc";

let newNoValue = Number(newScore)

console.log(typeof(newNoValue));

//  Prints NaN.
console.log((newNoValue));

/*
"33" -> 33
"33abc" -> NaN
true -> 1 ; false -> 0
*/