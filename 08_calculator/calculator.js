const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, each) => (total += each),0);
};

const multiply = function(array) {
  return array.reduce((total, each) => (total *= each),1);
};

const power = function(a, b) {
	result = 1;
  for (let i = 0; i < b; i++){
    result *= a;
  }
  return result;
};

const factorial = function(factor) {
	result = 1;
  for (let i = 1; i < (factor+1); i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
