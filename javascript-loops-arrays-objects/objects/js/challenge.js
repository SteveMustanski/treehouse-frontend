let students = [
  { 
    name: 'Steve',
    track: 'Front End Development',
    achievements: 100,
    points: 12000
  },
  { 
    name: 'John',
    track: 'High School',
    achievements: 3,
    points: 800
  },
  { 
    name: 'Anna',
    track: 'High School',
    achievements: 1,
    points: 10
  },
  { 
    name: 'Donna',
    track: 'PR',
    achievements: 60,
    points: 1200
  },
  { 
    name: 'Pepper',
    track: 'puppy',
    achievements: 10,
    points: 15
}
  ]

  function print(message) {
    let div = document.getElementById('output');
    div.innerHTML = message;
    
  };

  let message = '';
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  for (prop in student) {
    message += `<p> ${prop}: ${student[prop]} </p>`;
  }
  message += '<br>';
}
console.log(message);
print(message);