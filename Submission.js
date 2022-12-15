//ES2015 Refactor
function createInstructor (firstName, lastName) {
    return {
        firstName,
        lastname
    }
};

//Computed Property Names Refactor
let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};

//Object Methods Refactor
const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  };

  //createAnimal Function
  function createAnimal(species, call, noise){
    return {
      species,
      [call](){
        return noise;
      }
    }
  };