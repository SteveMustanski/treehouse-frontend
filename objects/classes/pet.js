class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  get owner() {
    return this._owner
  }

  set owner(owner) {
    this._owner = owner;
    console.log(`Owner setter called: ${owner}`)
  }

  get activity() {
    const today = new Date();
    let hour = today.getHours();

    if (hour > 8 && hour < 21) {
      return 'playing';
    } else {
      return 'sleeping';
    }
  }

  speak() {
    console.log(this.sound);
  }
}

const ernie = new Pet('dog', 1, 'pug', 'weeez');
const pepper = new Pet('dog', 8, 'border terrier', 'bark!');

ernie.speak();
pepper.speak();
console.log(pepper.activity);
pepper.owner = 'Steve';
console.log(pepper.owner);