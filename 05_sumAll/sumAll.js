const sumAll = function(int01, int02) {
    if (int01 < 0 || int02 < 0 || !Number.isInteger(int01) || !Number.isInteger(int02)) return 'ERROR';
    let begin_int = Math.min(int01, int02);
    let ending_int =  Math.max(int01, int02);
    let sum = 0;
    for(let i = begin_int; i <= ending_int; i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
