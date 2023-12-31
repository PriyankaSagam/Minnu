class player{
    constructor(name){
    this.name=name;
    this.score=[];
    this.finalscore = 0;
    };

//to store each round score in an array 

    buildScore(score){
        this.score.push(score);
        return this.score;
    }
// calculating the final score

    sumScores(score){
        this.score = score;
        for (let i=0;i<this.score.length;i++){
            this.finalscore += this.score[i];
        }
        console.log(this.finalscore);
        return this.finalscore;
    }

}
//Dice class definition

class Dice{
    constructor(){
      this.score = 0
    }
//rolling dice using random function

    rollDice(){
        
        this.score = Math.floor(Math.random() * 6) + 1
        return this.score;
    };
    }
//---Main logic starts here--------------------------------------
 
//creating players using player class =>instantiating

let player1=new player('Player1')
console.log(player1);

let player2=new player('Player2')
console.log(player2);

//creating dice instance

let dice = new Dice();

//initialising  variables

let player1Played = false;
let player2Played = false;
let player1ScoreAll = [];
let player2ScoreAll = [];
var player1FinalScore = 0;
var player2FinalScore = 0;
let winnerName = '';
document.getElementById('continue').disabled = true;
document.getElementById('winner').disabled = true;
document.getElementById('start').disabled = true;
document.getElementById('quit').disabled = true;

//addEventListener to enter button and choose rounds

let numOfRounds = 0;
const enter = document.getElementById('display');

enter.addEventListener('click', function(){
    document.getElementById('result').textContent = "Click on Start Button to start Game";
    numOfRounds = document.querySelector('input').value;
    console.log(numOfRounds);
    document.getElementById('start').disabled = false;
    document.getElementById('quit').disabled = false;
    document.getElementById('continue').disabled = true;
    document.getElementById('winner').disabled = true;
})

//check the number is numeric and valid number

if (isFinite(numOfRounds) && !isNaN(numOfRounds)){
    console.log(numOfRounds + " is valid number")
    if (numOfRounds > 100){
        console.log("please enter value less than or equal 100")
    }
}
else{ 
    console.log("Please input a valid number")

}

//addEventListener to start button

const start = document.getElementById('start');

start.addEventListener('click', function(){
    if (numOfRounds == 0){
        document.getElementById('result').textContent = "";
        document.getElementById('finaltext').textContent = "Choose Number of rounds to play and hit Enter";
        document.getElementById('continue').disabled = true;
        document.getElementById('winner').disabled = true;
    }
    
    document.getElementById('winner').disabled = false;
    for (i=1;i<= numOfRounds;i++){
            console.log("round no. :" + i);
            document.getElementById('start').disabled = true;
            if (player1Played == false){
                const player1Score = dice.rollDice();
                console.log("Player1 Score: " + player1Score);
                player1Played = true; 
                player1ScoreAll = player1.buildScore(player1Score);
                //console.log(player1ScoreAll);
                
            } 
    
            if (player2Played == false){
                const player2Score = dice.rollDice();
                console.log("Player2 Score: " + player2Score);
                player2Played = true;
                player2ScoreAll = player2.buildScore(player2Score);
                //console.log(player2ScoreAll);
            }
    
            if (player1Played && player2Played){
                player1Played = false;
                player2Played = false;
            }
    
    };
    document.getElementById('result').textContent = "Click on winner button to know the winner";
})

//addEventListener to the winner

const winner = document.getElementById('winner');

winner.addEventListener('click', function(){
    document.getElementById('continue').disabled = false;
    document.getElementById('winner').disabled = true;
    player1FinalScore = 0;
    player2FinalScore = 0;
    player1FinalScore = player1.sumScores(player1ScoreAll);

    //player1 finalscore to diplay on game

    document.getElementById('score1').textContent = player1FinalScore;
    
    player2FinalScore = player2.sumScores(player2ScoreAll);

    //player2 finalscore to diplay on game

    document.getElementById('score2').textContent = player2FinalScore;

    console.log("final score of Player1: " + player1FinalScore);
    console.log("final score of Player2: " + player2FinalScore);

    if (player1FinalScore > player2FinalScore){
        console.log(player1.name + " is winner with highest score: " + player1.finalscore);
        winnerName = 'Player1 is the Winner';

    }
    else if(player1FinalScore < player2FinalScore){
        console.log(player2.name+ " is winner with highest score " + player2.finalscore);
        winnerName = 'Player2 is the Winner';
    }
    else if(player1FinalScore == player2FinalScore){
        console.log("its a tie with equal scores");
        winnerName = 'It is a tie!';
    }

    document.getElementById('result').textContent = winnerName;
    document.getElementById('finaltext').textContent = "Hit continue button to continue or Quit";

});

//addEventListener to continue buttton

const contue = document.getElementById('continue');

contue.addEventListener('click', function(){
    document.getElementById('result').textContent = "Choose Number of Rounds for next game and hit Enter";
    document.getElementById('finaltext').textContent = "";
    document.getElementById('start').disabled = false;
    document.querySelector('input').value = ""
   
})

//addEventListener to quit button

const qut = document.getElementById('quit');

qut.addEventListener('click', function(){
    document.getElementById('display').disabled = true;
    document.getElementById('start').disabled = true;
    document.getElementById('continue').disabled = true;
    document.getElementById('winner').disabled = true;
    document.getElementById('result').textContent = "All the buttons disabled as player wants to Quit";
    document.getElementById('finaltext').textContent = "Refresh page to start playing again";
 
})