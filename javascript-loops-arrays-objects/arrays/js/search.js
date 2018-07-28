let inStock = ['milk', 'eggs', 'butter', 'soda', 'beer'];

let search;

function print(message) {
  document.write(`<p> ${message} </p>`);
}

while (true) {
  search = prompt(`Search for an item, type "list" to see a list, and "quit" to exit`);
  search = search.toLocaleLowerCase();
  if (search === 'quit') {
    break;
  } else if (search === 'list') {
    print(inStock.join(', '));
  } else {
    if (inStock.indexOf(search) > -1 ) {
      print(`Yes we have ${search} in the store`);
    } else {
      print(`Sorry, we do not have ${search} in the store`);
    }
  }
}