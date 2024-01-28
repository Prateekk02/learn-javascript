console.log("Print using addOne: ",addOne(5))
function addOne(num){
    return num+1;
}


console.log(addTwo(5));   // It will give error.
const addTwo = function(num){
    return num + 2;
}