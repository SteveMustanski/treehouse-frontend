let person = {
  name: 'Sarah',
  country: 'US',
  age: 35,
  treehouseStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  let div = document.getElementById('output');
  div.innerHTML = message;
  
};

let message = `<p>Hello. My name is ${person.name}.</p>`;
message += `<p>I live in the ${person.country}.</p>`;
message += `<p>I am ${person.age}.</p>`;
message += `<p>My skills include ${person.skills.join(', ')}.</p>`;
print(message);