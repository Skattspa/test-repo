var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(0.34<computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (choice1,choice2){
    if (choice1 === choice2){
        return document.write("The result is a tie!")      
        }
    else if (choice1==="rock"){
        if (choice2==="scissors"){
            return document.write("rock wins")
            }
        else {
            return document.write("paper wins")
            }
        } 
    else if (choice1==="paper"){
        if (choice2==="rock"){
            return document.write("paper wins")
            }
        else {
            return document.write("scissors wins")
            }    
        }
    else if (choice1==="scissors"){
        if (choice2==="paper"){
            return document.write("scissors wins")
            }
        else {
            document.write("rock wins")
            }
        
        }
        
        
    };
    compare (userChoice,computerChoice)
document.write (return)
