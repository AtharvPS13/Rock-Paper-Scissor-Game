function getHumanchoice(){
   const choice= prompt("Enter Rock, Paper , Scissor");
   return choice.toLowerCase();
}

function getcomputerchoice(){
    const x=Math.floor(Math.random()*100);
    if(x<=33) return "rock";
    else if(x<=66) return "paper";
    else return "scissor";
}

let humanscore=0;
let computerscore=0;

function playRound(humanselection,computerselection){
    if(humanselection==="rock" && computerselection==="paper")
    {
        console.log("You lost!," + computerselection +" beats "+humanselection);
        computerscore++;
    }
    else if(humanselection==="paper" && computerselection==="rock")
    {
        console.log("You Won!," + humanselection +" beats "+ computerselection);
        humanscore++;
    }
    else if(humanselection==="scissor" && computerselection==="rock")
    {
        console.log("You lost!," + computerselection +" beats "+humanselection);
        computerscore++;
    }
    else if(humanselection==="rock" && computerselection==="scissor")
    {
        console.log("You Won!," + humanselection +" beats "+ computerselection);
        humanscore++;
    }
    else if(humanselection==="paper" && computerselection==="scissor")
    {
        console.log("You lost!," + computerselection +" beats "+humanselection);
        computerscore++;
    }
    else if(humanselection==="scissor" && computerselection==="paper")
    {
        console.log("You Won!," + humanselection +" beats "+ computerselection);
        humanscore++;
    }
    else
    {
        console.log("It's Tie!");
    }
}

for(let i=0;i<5;i++)
{
    const computerselection=getcomputerchoice();
    const humanselection=getHumanchoice();
    playRound(humanselection,computerselection);
}
console.log("Your Score: " + humanscore);
console.log("Computer Score: " + computerscore);

if(computerscore<humanscore)
{
    console.log("You won the game!!");
}
else if(computerscore>humanscore)
{
    console.log("You lost the game!!");
}
else console.log("It's Tie!!");