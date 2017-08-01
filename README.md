# variable_intro
JavaScript-variables
*js remember info using variables

Difference ways to declare variables
*var-it's content and type can change over time
*const-constant value and can't change once defined
*let - allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
*const and let is in the latest version of js[ES6]
*not all browse support const and let.

Example of var and const
**************************
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
const one = 71;
****************************
*********************
In above code we have var which changes over time
first value of one was 102 after changes it gives 120
however const stay the same doesn't change after changes.
declaring variable which already exists using const leads to error
*********************
variable types
**string
**number
**boolean
**object
***************
Dynamically typed variables
**variables types can be changed after declared
***that is change from string to number or visa-vesa
****code below shows the variable changed from string to number.
****************************************************************
var theString = 'my string';
console.log("theString's type is : " + typeof theString);

//change it do a number
theString = 1008;
//the type of theString is now a number
console.log('The variables type changed!');
console.log("theString's type is : " + typeof theString);
******************************************************************

finding length of string and length of number
**trying finding length of number give NaN.
**however is possible to find length of string.
***code below show scenario above
************************************************
//declare a string
var theString = 'my string';
//print the length of a string
console.log(theString.length);// this give the value 9 which is the length of letters in 'my string'
//change it do a number
theString = 1008;
//this will fail
console.log('theString.length is now undefined and your program might break!');

console.log(theString.length);//this give undefined since is trying to find length of a number
************************************************

EMPTY VARIABLES
**have two types (undefined and null)
***undefined-variable have been defined, but don't have value yet.
***null-this can be assigned to variable to indicate is not define.
*********************
var theDay;//undefined variable

//this will be undefined
console.log(theDay);

theDay = null; //assigning null to variable theDay to show that is undefined.

//now it is null
console.log(theDay);
**********************
