const score  = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

// Use tofixed function when building an e commerce application.

console.log(balance.toString())
console.log(balance.toFixed(2))


// Set Precision function.
const otherno = 123.4564
console.log(otherno.toPrecision(4))

// To local string function

const hundreds = 1000000000

console.log(hundreds.toLocaleString())  // USA standard
console.log(hundreds.toLocaleString('en-IN'))  // India standard

console.log(" **************************************Maths**************************************")

console.log(Math.random())
console.log((Math.random()*10) + 1)

// Important formula

const min = 10
const max = 20

// It restricts the value of random between max and min.
console.log(Math.floor(Math.random() * ( max - min + 1)) + min)     


