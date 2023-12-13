// singleton
// Object.create

// Declaring symbols

const mySym = Symbol("key1")
// A special case of Symbol .....

/* {
    
    const userJs = {
        //     name: "codewalker66",
        //     "full name" : "LukeCodeWalker66",
        //     mySym : "myKey",
        //     age : 21,
        //     location: 'Bhopal',
        //     email: "codewalker@gmail.com"
        // }
        // console.log(userJs.mySym) // This is not treated as symbol rather it is being treated as string.
        // console.log(typeof userJs.mySym)
        // console.log(userJs)
        }
  */  


// Object Literals
const userJs = {
    name: "codewalker66",
    "full name" : "LukeCodeWalker66",
    [mySym]  : "myKey",   // correct Way to declare symbol.
    age : 21,
    location: 'Bhopal',
    email: "codewalker@gmail.com"
}

console.log(userJs.email)  // Not recommended. (but why)
console.log(userJs["full name"])  // you cannot access full name using dot operator
console.log(userJs["email"])
console.log(userJs[mySym])
console.log(userJs)


// Freeze method.
/*
Object.freeze(userJs)   // Will not allow to propagate any change in the object.
userJs["name"] = "DarthVader";

console.log(userJs)
*/

// Function inside object.......

userJs.greeting = function (){
    // console.log("Hello ${userJs["name"]}")
    console.log(`Hello ${this.name}`);
}

console.log(userJs.greeting)  // returns reference of the function.
console.log(userJs.greeting()) // returns Hello codeWalker66 along with undefined. 