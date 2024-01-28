function calculatePrice(num1){
    return num1;
}

console.log(calculatePrice(4))

console.log(calculatePrice(3,4,5,3,2))

function calculatePrice2(...num1){   // rest operator.
    return num1;
}

console.log(calculatePrice2(3,4,23,34,4))


function myFunc(val1, val2, ...num){
    return num;
}

console.log(myFunc(1,2,3,4,5,6))