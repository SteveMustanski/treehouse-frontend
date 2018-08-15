class Pet {
  constructor(animal, age, breed) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
  }
}

const ernie = new Pet('dog', 1, 'pug');
const pepper = new Pet('dog', 8, 'border terrier');

console.log(pepper);