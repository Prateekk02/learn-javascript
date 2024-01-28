myObj = {
    user: "Anakin",
    order: 66
};

// Method 1
function myFunc(anyobject){
    return (`${anyobject.user} executes order ${anyobject.order}.`);
}

console.log(myFunc(myObj))

// Method 2
console.log(myFunc({
    user: "Darth Vader",
    order: 66
}));