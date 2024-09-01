/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
const weight = 68;
const heightInches = 67;
const heightCm = heightInches * 2.54;
console.log(heightCm);


const heightMeter = heightCm / 100;
console.log(heightMeter);

const BMI = weight / heightMeter **2
BMI.toFixed(3);
const BMICalculate = parseFloat(BMI.toFixed(3))
console.log(BMICalculate);
if(BMI < 18.5){
    console.log("You are underweight")
} else if(BMI >= 18.5 && BMI <=24.9){
    console.log("You are normal")
} else if(BMI >=25 && BMI <= 29.9)
    console.log("You are overweight")
else{
    console.log("You are obese")
}