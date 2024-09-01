/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
 const myScore = 87;
//  const myScore = 79;
//  const friendScore = 84;
//  const friendScore = 69;
//  const friendScore = 46;
 const friendScore = 36;
 if(friendScore > 80){
    console.log("Go for a lunch")
}else if(myScore < 80){
    console.log("Go to home and sleep and act sad");
}
else{
    if(friendScore < 80 && friendScore >=60){
        console.log("Good luck for next time");
    }
    else{
        if(friendScore < 60 && friendScore >=40){
            console.log("Messege Unseen")
        }
        else{
            if(friendScore <40){
                console.log("Friends is block")
            }
        }
    }
}