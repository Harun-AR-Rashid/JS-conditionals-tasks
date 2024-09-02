/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular tickjet fare 800 tk
*/
const studentaAge = 50;
const forTicket = 800;
// const studentaAge = 08;
const passenger = "students";
const totalRent = forTicket * 50/100;
// console.log(totalRent);
const seniorSitizen = forTicket * 15/100;
// console.log(seniorSitizen);
if(studentaAge <10){
    console.log("Children's rent is free")
}
else{
    if(studentaAge === passenger){
        console.log("Your rent is",forTicket - totalRent);
    }
    else{

        if(studentaAge >= 60){
            console.log("Your rent is", forTicket - seniorSitizen)
        }
        else{
            console.log("your rent is", forTicket)
        }
    }
}