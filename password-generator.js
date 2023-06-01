//test4
var generator = require("generate-password")
var password = generator.generate({
  length: 44,
  numbers: true

})
console.log(password);