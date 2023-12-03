// typescript doesn't allow to compare two different datatypes.
console.log("2" > 1) // true
console.log("1" > 1) // false
console.log("0" > 1) // false

console.log(null>0) // false
console.log(null>=0) // true
console.log(null==0)  // false
console.log(null<0)  // false
console.log(null<=0)  // true


// comparison operators like <,>, <=, >= converts null into 0 but == operator doesn't .


/*
        Type coercion in JavaScript refers to the automatic 
        conversion of values from one data type to another during 
        the evaluation of an expression. JavaScript is a loosely-typed 
        language, which means that variables and values are not explicitly 
        bound to a specific data type. Type coercion occurs when an 
        operation is performed on values of different types, and JavaScript
         automatically converts one or both of the values to a common type.
*/
console.log("***********************")
console.log(1 == "1")   // does type coercion
console.log(1 === "1")  // === (strict checks) means value and datatype both should be same.

// typecasting --> programmer explicitly converts the data type. 
// type coercion --> program does conversion automatically.
