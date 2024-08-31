/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const avgMarks = 87;
if(avgMarks >= 90 && avgMarks <=100){
    console.log("You have got A")
} else if(avgMarks >= 80 && avgMarks <=89){
    console.log("You have got B")
} else if(avgMarks >= 70 && avgMarks <=79){
    console.log("You have got C")
} else if(avgMarks >= 60 && avgMarks <=69){
    console.log("You have got D")
} else if(avgMarks >= 0 && avgMarks <=59){
    console.log("You have failed")
}
else{
    console.log("You were absent")
}