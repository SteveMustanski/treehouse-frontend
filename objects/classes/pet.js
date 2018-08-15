class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }
}

const ernie = new Pet('dog', 1, 'pug', 'weeez');
const pepper = new Pet('dog', 8, 'border terrier', 'bark!');

ernie.speak();
pepper.speak();