/*
Declare three variables, a and b and c.

If a has value 3, b has value 5, and c doesn't have a value,
print the following expressions ( one after another ). Printing in console has to show the following content for 
each expression (concatenate everything in one long expression using "\n" to make new lines OR use backticks to 
interpolate the variables):
*/

//TASK 1
let a = 3;
let b = 5;
let c;

let numbers = `let a = 3 ;\n
let b = 5;\n
let c;\n-----------\n
a + b = ${a+b}\n
a - b = ${a-b}\n
a * b = ${a*b}\n
a / b = ${a/b}\n
a % b = ${a%b}\n
a += b = ${a+=b}\n
a -= b = ${a-=b}\n
a *= b = ${a*=b}\n
a /= b = ${a/=b}\n
a %= b =${a%=b}\n
a == b = ${a==b}\n
a != b = ${a!=b}\n
a > b = false\n
a < b = true\n
!a && !c = false\n
!a || !c = true`

console.log (numbers);

//TASK 2
let first_name = 'oliver';
let last_name = 'aberin';
let email = 'aber0018@algonquinlive.com';

myname = `My name is ${first_name} ${last_name}. You can contact me at ${email}`;

console.log(myname);





