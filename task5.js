/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
const num1 = 54;
const num2 = 45;
const answer = num1 * 2;
const answer2 = num1 + num2;
// console.log(answer2);
// console.log(answer); 
// if(num1 > num2){
//     console.log(answer);
// }
// else{
//     console.log(answer2);
// }
num1 > num2 ? console.log(answer) : console.log(answer2);