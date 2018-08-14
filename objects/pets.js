const pepper = {
  animal: 'dog',
  age: 8,
  breed: 'border terrier',
  bark: () => {
    console.log('Bark!');
  }
}

console.log(pepper.age);
console.log(pepper.breed);
pepper.bark();

pepper.age = 2;
console.log(pepper.age);