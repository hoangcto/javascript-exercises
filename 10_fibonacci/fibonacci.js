const fibonacci = function(index) {
    if(index < 0) return "OOPS";
    let fiboArray = [1, 1];
    let currIndex = 0;
    while (currIndex + 1 != index){
        fiboArray.push(fiboArray[currIndex] + fiboArray[currIndex + 1]);
        currIndex += 1;
    }
    return fiboArray[currIndex];


};

// Do not edit below this line
module.exports = fibonacci;
