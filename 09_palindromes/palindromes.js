const palindromes = function (strings) {
    strings = strings.replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, "")
         .toLowerCase();
    const stringarray = strings.split('');
    let reversestring = strings.split('').reverse();
    for (let i = 0; i < stringarray.length ; i++){
        if (stringarray[i] != reversestring[i]){
            return false;    
        }
    }
    return true;
    
};

// Do not edit below this line
module.exports = palindromes;
