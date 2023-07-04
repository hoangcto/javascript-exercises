const findTheOldest = function(array) {
    let oldestAge = array.reduce((age, person) => 
        Math.max(age, getAge(person.yearOfDeath, person.yearOfBirth)), 0);
    let oldestPerson = array.find(person => getAge(person.yearOfDeath, person.yearOfBirth) === oldestAge);
    return oldestPerson;
};

const getAge = function (death, birth) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

// Do not edit below this line
module.exports = findTheOldest;
