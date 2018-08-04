function exec(func, arg) {
  func(arg);
}

exec((something) => {
  console.log(something);
}, 'We just passed a function to a function');