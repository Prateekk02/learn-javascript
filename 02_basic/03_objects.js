// Singleton objects.

const tinderUser = {}   // Not a singleton object

// const tinderUser = new Object()  // singleton object.
tinderUser.id = "123abc";
tinderUser.name = "Darth Vader";
tinderUser.isLoogedIn = false;

// Object inside object.

const regularUser = {
    email: "regular@gmail.com",
    fullname: {
        firstName: "Luke",
        lastName: "Skywalker",
        side: {
            light: "Jedi",
            dark: "Sith"
        }
    }
}

// We access this type of object using dot notation.

console.log(regularUser.fullname?.firstName)

// This ? sign is recommanded to avoid the case where if 'fullname' does not exists.


// Combining objects.

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj3 = {5:"e", 6:"f"};


// const obj4 = Object.assign(obj1,obj2,obj3) // in this we are treating obj1 as target object.
// console.log(obj1);

const obj5 = Object.assign({}, obj1,obj2,obj3)
console.log("obj5 : " , obj5)



// We will generally use spread operator.

const obj6 = {...obj1,...obj2, ...obj3}

console.log("obj6: ",obj6)

// Important for database handling.

console.log(tinderUser)

console.log("Keys: ", Object.keys(tinderUser))   // will return an array of keys.
console.log("Values: ", Object.values(tinderUser))   