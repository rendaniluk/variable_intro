//in a file called var_const.js

var one = '102'
//variables can change
one = '120'

const two = '200';
console.log(two);

//constants can't changes
two = '202';

//two is still '202'
console.log(two);

//doing this cause an error - as one already exists
//const one = 71;
