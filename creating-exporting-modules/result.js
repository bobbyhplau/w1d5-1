var module = require("./func");


var newArray = [];
var insert = module.insert;
var sort = module.sort;
var input = process.argv.slice(2);

insert(input);
// insert(8,newArray);
// insert(0,newArray);
// insert(1,newArray);

console.log(input.sort())