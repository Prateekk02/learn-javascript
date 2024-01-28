// Dates

const myDate = new Date()    // myDate is of type object 
console.log(myDate)
console.log("String: " + myDate.toString())
console.log("ISOString: " + myDate.toISOString())
console.log("JSON: " +  myDate.toJSON())
console.log("LocaleDateString: " +  myDate.toLocaleDateString())
console.log("LocaleString: " + myDate.toLocaleString())
console.log("TimeString: " + myDate.toTimeString())
console.log("LocaleTimeString: " + myDate.toLocaleTimeString())


let createdDate =   new Date(2023, 0 , 23)   // month starts with 0 in javascript.1 
console.log(createdDate.toString()) 

// new format to declare date
let createdDate2 = new Date("2023-06-15")   //  yy-mm-dd
console.log(createdDate2.toLocaleString()) 

// Use timestamp when you have to design polls , quiz app etc.

let myTimeStamp = Date.now() 
console.log(myTimeStamp)   // millisecond

console.log(createdDate.getTime())   // also results time in milliseconds

// To convert this in seconds

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()


// ctrl + space to know about all the methods.

console.log("***************************************************************************")
console.log(newDate.toLocaleString('default' , {
    weekday: "long",
    
}))

