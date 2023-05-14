const reverseString = function(string) {
    const myArray = string.split("");
    result = ''; 
    for (let i = myArray.length - 1; i >= 0; i--){
        result += myArray[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
