function say(something) {
  console.log(something);
}

function exec(func, arg) {
  func(arg);
}

exec(say, 'We just passed a function to a function');