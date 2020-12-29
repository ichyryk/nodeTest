"use strict";

var message = "nodejs is cool!";
console.log(message);

var greeter = function greeter(message) {
  return console.log(message);
};

module.exports = greeter;